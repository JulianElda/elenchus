import { memo, useCallback } from "react";
import { EntryItemType } from "types";
import { NodeListItem, nodeListSorterFunction } from "components/node-list";

type NodelistProp = {
  items: EntryItemType[];
  onHandleFolder: Function;
};

export const NodeList = memo(function (props: NodelistProp) {
  // download a single item
  const downloadItem = useCallback(function (
    _itemId: string,
    itemName: string
  ) {
    console.log(itemName);
  },
  []);

  const mapItemList = () => {
    return props.items
      .sort(nodeListSorterFunction())
      .map((item: EntryItemType) => {
        return (
          <NodeListItem
            key={item.id}
            id={item.id}
            type={item.type}
            name={item.name}
            onHandleFile={downloadItem}
            onHandleFolder={props.onHandleFolder}
          />
        );
      });
  };

  return <ul className="divide-y shadow">{mapItemList()}</ul>;
});
