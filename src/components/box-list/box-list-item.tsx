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
    <li className="h-12 cursor-pointer p-4 bg-white" onClick={onNavigateBox}>
      <BoxListItemIcon icon={props.type} />
      <label className="ml-2 box-list-item-name cursor-pointer">
        {props.name}
      </label>
    </li>
  );
}
