import { useNavigate } from "react-router-dom";
import BoxListItemIcon from "components/box-list/box-list-item-icon";
//import BoxListItemDropdown from "components/box-list/box-list-item-dropdown";
import { Box } from "types";
import "./box-list-item.scss";

type BoxListItemType = {
  id: string;
  name: string;
  type: Box.type;
};

export default function BoxListItem(props: BoxListItemType) {
  const navigate = useNavigate();

  const onNavigateBox = () => {
    navigate("/box/" + props.id);
  };

  return (
    <li className="box-list-item list-group-item" onClick={onNavigateBox}>
      <BoxListItemIcon icon={props.type} />
      <label className="box-list-item-name">{props.name}</label>
      {/*<BoxListItemDropdown id={props.id} />*/}
    </li>
  );
}
