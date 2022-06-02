import NodeListItemIcon from "./node-list-item-icon";

type NodeListItemProps = {
  id?: string;
  name?: string;
  type?: string;
  onClick?: Function;
};

export default function NodeListItem(props: NodeListItemProps) {
  const onClick = () => {
    if (props.type === "DIR") props.onClick?.(props.id, props.name);
  };

  return (
    <li className="list-group-item node-list-item" onClick={(e) => onClick()}>
      <NodeListItemIcon type={props.type} name={props.name} />
      <span>{props.name}</span>
    </li>
  );
}
