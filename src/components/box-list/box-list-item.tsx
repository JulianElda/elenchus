import { useNavigate } from "react-router-dom";
import { IdgardBox } from "types";
import BoxListItemIcon from "./box-list-item-icon";

export default function BoxListItem(props: IdgardBox) {
  const navigate = useNavigate();

  const onNavigateBox = () => {
    console.log("onnavigatebox");
    navigate("/box/" + props.id);
  };

  return (
    <li className="list-group-item" onClick={onNavigateBox}>
      <BoxListItemIcon icon={props.type} />
      <span>{props.name}</span>
    </li>
  );
}
