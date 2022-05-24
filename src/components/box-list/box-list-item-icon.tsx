import FAIcon from "@common/fa-icon";

import "./box-list-item-icon.css";

export default function BoxListItemIcon(props) {
  return (
    <span className="box-list-item-icon">
      <FAIcon type="BOX" icon={props.icon} />
    </span>
  );
}