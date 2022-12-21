import { useState } from "react";

type TEntry = {
  name: string;
  children?: TEntry[];
};

export const Entry = ({ entry, depth }: { entry: TEntry; depth: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      {entry.children ? (
        <button
          className="tree-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {" "}
          {isExpanded ? "- " : "+ "} {entry.name}
        </button>
      ) : (
        <div>{entry.name}</div>
      )}
      {isExpanded && (
        <div style={{ paddingLeft: `${depth * 10}px` }}>
          {entry.children?.map((entry) => (
            <Entry entry={entry} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};
