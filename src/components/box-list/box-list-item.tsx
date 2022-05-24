import { useNavigate } from "react-router-dom";

import BoxListItemIcon from "./box-list-item-icon";

export default function BoxListItem(props) {

  const navigate = useNavigate();

  const onNavigateBox = () => {
    navigate("/box/" + props.id)
  }

  return (
    <li className="list-group-item" onClick={onNavigateBox}>
      <BoxListItemIcon icon={props.type} />
      <span>{props.name}</span>
    </li>
  );
}