import { FC, Fragment, ReactNode } from "react";

// **bold**, [text](url) and line breaks (\n). Links open in a new tab.
const TOKEN = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)|\n/g;

const render = (text: string, keyPrefix = ""): ReactNode[] => {
    const nodes: ReactNode[] = [];
    let last = 0;
    let i = 0;
    for (const match of Array.from(text.matchAll(TOKEN))) {
        const index = match.index ?? 0;
        if (index > last) nodes.push(text.slice(last, index));
        const key = `${keyPrefix}${i++}`;
        const [whole, bold, linkText, href] = match;
        if (bold !== undefined) {
            nodes.push(<b key={key}>{render(bold, `${key}.`)}</b>);
        } else if (linkText !== undefined) {
            nodes.push(<a key={key} target="_blank" rel="noreferrer" href={href}>{render(linkText, `${key}.`)}</a>);
        } else {
            nodes.push(<br key={key} />);
        }
        last = index + whole.length;
    }
    if (last < text.length) nodes.push(text.slice(last));
    return nodes;
};

export const RichText: FC<{ text: string }> = ({ text }) => <Fragment>{render(text)}</Fragment>;
