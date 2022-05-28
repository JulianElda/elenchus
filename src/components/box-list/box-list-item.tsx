import { useNavigate } from "react-router-dom";
import { IdgardBox } from "types";
import BoxListItemIcon from "components/box-list/box-list-item-icon";
import BoxListItemDropdown from "components/box-list/box-list-item-dropdown";

import "./box-list-item.scss";

export default function BoxListItem(props: IdgardBox) {
  const navigate = useNavigate();

  const onNavigateBox = () => {
    navigate("/box/" + props.id);
  };

  return (
    <li className="box-list-item list-group-item" onClick={onNavigateBox}>
      <BoxListItemIcon icon={props.type} />
      <label className="box-list-item-name">{props.name}</label>
      <BoxListItemDropdown id={props.id} />
    </li>
  );
}
