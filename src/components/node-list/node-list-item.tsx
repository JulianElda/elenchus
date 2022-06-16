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
    <li className="list-group-item node-list-item">
      <input
        className="form-check-input me-2"
        type="checkbox"
        checked={selected}
        aria-label="selected"
        onChange={onSelectItem}
      />
      <NodeListItemIcon
        type={props.type || defaultIconType}
        name={props.name || defaultIconName}
      />
      <label className="node-list-item-name" onClick={onClick}>
        {props.name}
      </label>
    </li>
  );
});
