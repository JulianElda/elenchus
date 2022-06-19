import { useNavigate } from "react-router-dom";
import { BoxTypes } from "types";
import { BoxListItemIcon } from "components/box-list";
import "./box-list-item.scss";

type BoxListItemType = {
  id: string;
  name: string;
  type: BoxTypes;
};

export function BoxListItem(props: BoxListItemType) {
  const navigate = useNavigate();

  const onNavigateBox = () => {
    navigate("/box/" + props.id);
  };

  return (
    <li className="box-list-item list-group-item" onClick={onNavigateBox}>
      <BoxListItemIcon icon={props.type} />
      <label className="box-list-item-name">{props.name}</label>
    </li>
  );
}
