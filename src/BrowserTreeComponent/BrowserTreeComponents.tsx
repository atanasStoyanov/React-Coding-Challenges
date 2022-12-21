import { tree } from "./treeMock";
import { Entry } from './Entry'

export const BrowserTreeComponent = () => {
  return (
    <div>
      {tree.children.map((entry) => (
        <Entry entry={entry} depth={1} />
      ))}
    </div>
  );
};
