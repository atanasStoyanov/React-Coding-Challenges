import "./BrowserTreeComponent.css"
import { tree } from "./treeMock";
import { Entry } from './Entry'

export const BrowserTreeComponent = () => {
  return (
    <div>
      {tree.children.map((entry, index) => (
        <Entry key={index} entry={entry} depth={1} />
      ))}
    </div>
  );
};
