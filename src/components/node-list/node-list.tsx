import { Entry } from "types";
import NodeListItem from "./node-list-item";
import { nodeListSorterFunction } from "./node-list-sorter";

type FileListProp = {
  items: Entry[];
};

export default function NodeList(props: FileListProp) {
  const mapitemList = () => {
    return props.items.sort(nodeListSorterFunction()).map((item: Entry) => {
      return (
        <NodeListItem
          key={item.id}
          id={item.id}
          type={item.type}
          name={item.name}
        />
      );
    });
  };

  return <ul className="list-group">{mapitemList()}</ul>;
}
