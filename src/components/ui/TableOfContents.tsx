import { memo, useEffect, useState } from "react";

const TableOfContents = ({ content }: { content: string }) => {
    const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([]);
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const items: Array<{ id: string; text: string; level: number }> = [];
        const regex = /^(#{2,3})\s+(.+)$/gm;
        let match: RegExpExecArray | null;

        match = regex.exec(content);
        while (match) {
            const level = match[1].length;
            const text = match[2].trim().replace(/\*\*?(.+?)\*\*?/g, "$1");
            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
            items.push({ id, text, level });
            match = regex.exec(content);
        }

        setHeadings(items);
    }, [content]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting);
                if (visible.length > 0) {
                    const sorted = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                    setActiveId(sorted[0].target.id);
                }
            },
            { rootMargin: "-80px 0px -40%" }
        );

        headings.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [headings]);

    if (!headings.length) return null;

    const handleClick = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="sticky top-24 hidden xl:block">
            <div className="mb-5 text-sm font-bold text-heading uppercase tracking-wider">
                On This Page
            </div>
            <ul className="space-y-3 text-base border-l-2 border-gray-200 dark:border-white/10">
                {headings.map(({ id, text, level }) => (
                    <li key={id}>
                        <a
                            href={`#${id}`}
                            onClick={(e) => handleClick(e, id)}
                            className={`block py-2 transition-all duration-200 border-l-2 -ml-[2px] ${level === 3 ? "pl-7" : "pl-5"
                                } ${activeId === id
                                    ? "border-gray-900 dark:border-white text-heading font-semibold"
                                    : "border-transparent text-gray-600 dark:text-gray-400 hover:text-heading hover:border-gray-400 dark:hover:border-gray-600"
                                }`}
                        >
                            {text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default memo(TableOfContents);
