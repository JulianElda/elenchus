import { useNavigate, useParams } from "react-router-dom";
import { Entry } from "types";
import NodeListItemIcon from "./node-list-item-icon";

export default function NodeListItem(props: Entry) {
  const navigate = useNavigate();
  const params = useParams();

  const onClick = () => {
    if (props.type === "DIR") navigate("/box/" + params.boxId + "/" + props.id);
  };

  return (
    <li className="list-group-item" onClick={(e) => onClick()}>
      <NodeListItemIcon type={props.type} name={props.name} />
      <span>{props.name}</span>
    </li>
  );
}
