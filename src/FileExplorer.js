import { useState } from "react";

function FileNode({ node }) {
    const [expanded, setExpanded] = useState(false);

    const isDirectory = Array.isArray(node.children);

    const sortedChildren = isDirectory
        ? [...node.children].sort((a, b) => {
            const aIsDir = !!a.children;
            const bIsDir = !!b.children;
            if (aIsDir !== bIsDir) return bIsDir - aIsDir;

            return a.name.localeCompare(b.name);
        })
        : [];

    return (
        <div style={{ marginLeft: 16 }}>
            {isDirectory ? (
                <div>
                    <span
                        style={{
                            cursor: "pointer",
                            fontWeight: "bold",
                            userSelect: "none",
                        }}
                        onClick={() => setExpanded((prev) => !prev)}
                    >
                        {expanded ? "📂 " : "📁 "} {node.name}
                    </span>
                    {expanded && (
                        <div>
                            {sortedChildren.map((child) => (
                                <FileNode key={child.id} node={child} />
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <div>📄 {node.name}</div>
            )}
        </div>
    );
}

export default function FileExplorer({ data }) {
    const sortedData = Array.isArray(data) ? data.sort((a, b) => {
        const aIsDir = Array.isArray(a.children);
        const bIsDir = Array.isArray(b.children);

        if (aIsDir && !bIsDir) return -1;
        if (!aIsDir && bIsDir) return 1;
        return a.name.localeCompare(b.name);
    }) : [];

    return (
        <div>
            {sortedData.map((node) => (
                <FileNode key={node.id} node={node} />
            ))}
        </div>
    );
}
