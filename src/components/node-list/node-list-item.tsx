import { memo, useContext, useState } from "react";
import { FileListContext } from "components/file-list";
import { NodeListItemIcon } from "components/node-list";
import "./node-list-item.scss";

type NodeListItemProps = {
  id?: string;
  name?: string;
  type?: string;
  onHandleFile?: Function;
  onHandleFolder?: Function;
};

export const NodeListItem = memo(function (props: NodeListItemProps) {
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
    <li className="list-group-item node-list-item">
      <input
        className="form-check-input me-2"
        type="checkbox"
        checked={selected}
        aria-label="selected"
        onChange={onSelectItem}
      />
      <NodeListItemIcon type={props.type} name={props.name} onClick={onClick} />
      <label className="node-list-item-name" onClick={onClick}>
        {props.name}
      </label>
    </li>
  );
});
