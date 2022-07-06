import { memo, useContext, useState } from "react";
import { EntryItemTypes } from "types";
import { FileListContext } from "components/file-list";
import { NodeListItemIcon } from "components/node-list";
import "./node-list-item.scss";

type NodeListItemProps = {
  id: string;
  name: string;
  type: EntryItemTypes;
  onHandleFile?: Function;
  onHandleFolder?: Function;
};

export const NodeListItem = memo(function (props: NodeListItemProps) {
  const [selected, setSelected] = useState<boolean>(false);
  const onHandleSelected = useContext<any>(FileListContext).onHandleSelected;

  const defaultIconType = EntryItemTypes.FILE;
  const defaultIconName = "gen";

  const onClick = (e) => {
    if (props.type === "DIR") props.onHandleFolder?.(props.id, props.name);
    else if (props.type === "FILE") props.onHandleFile?.(props.id, props.name);
  };

  const onSelectItem = (e) => {
    e.stopPropagation();
    onHandleSelected?.({
      type: selected === false ? "add" : "remove",
      id: props.id,
    });
    setSelected((old) => !selected);
  };

  return (
    <li className="h-12 cursor-pointer p-4 bg-white">
      <input
        className="h-4 w-4 rounded border-gray-300"
        type="checkbox"
        checked={selected}
        aria-label="selected"
        onChange={onSelectItem}
      />
      <NodeListItemIcon
        type={props.type || defaultIconType}
        name={props.name || defaultIconName}
      />
      <label className="node-list-item-name cursor-pointer" onClick={onClick}>
        {props.name}
      </label>
    </li>
  );
});
