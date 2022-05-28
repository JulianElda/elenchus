import { useNavigate } from "react-router-dom";
import { IdgardBox } from "types";
import BoxListItemIcon from "components/box-list/box-list-item-icon";
import BoxListItemDropdown from "components/box-list/box-list-item-dropdown";

export default function BoxListItem(props: IdgardBox) {
  const navigate = useNavigate();

  const onNavigateBox = () => {
    navigate("/box/" + props.id);
  };

  return (
    <li className="list-group-item" onClick={onNavigateBox}>
      <BoxListItemIcon icon={props.type} />
      <span>{props.name}</span>
      <BoxListItemDropdown id={props.id} />
    </li>
  );
}
