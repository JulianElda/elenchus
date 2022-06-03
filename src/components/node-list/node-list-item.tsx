import NodeListItemIcon from "./node-list-item-icon";
import "./node-list-item.scss";

type NodeListItemProps = {
  id?: string;
  name?: string;
  type?: string;
  onHandleFile?: Function;
  onHandleFolder?: Function;
};

export default function NodeListItem(props: NodeListItemProps) {
  const onClick = () => {
    if (props.type === "DIR") props.onHandleFolder?.(props.id, props.name);
    else if (props.type === "FILE") props.onHandleFile?.(props.id, props.name);
  };

  return (
    <li className="list-group-item node-list-item" onClick={(e) => onClick()}>
      <NodeListItemIcon type={props.type} name={props.name} />
      <label className="node-list-item-name">{props.name}</label>
    </li>
  );
}
