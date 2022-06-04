import { memo, useContext, useState } from "react";
import NodeListItemIcon from "./node-list-item-icon";
import { FileListContext } from "components/file-list/file-list";
import "./node-list-item.scss";

type NodeListItemProps = {
  id?: string;
  name?: string;
  type?: string;
  onHandleFile?: Function;
  onHandleFolder?: Function;
};

const NodeListItem = memo(function (props: NodeListItemProps) {
  const [selected, setSelected] = useState<boolean>(false);
  const onHandleSelected = useContext<any>(FileListContext).onHandleSelected;

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
    <li className="list-group-item node-list-item" onClick={onClick}>
        <input
          className="form-check-input me-2"
          type="checkbox"
          checked={selected}
          aria-label="selected"
          onChange={onSelectItem}
        />
      <NodeListItemIcon type={props.type} name={props.name} />
      <label className="node-list-item-name">{props.name}</label>
    </li>
  );
});

export default NodeListItem;
