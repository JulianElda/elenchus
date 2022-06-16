import FAIcon from "components/common/fa-icon";

import "./box-list-item-icon.scss";

export function BoxListItemIcon(props) {
  return (
    <span className="box-list-item-icon">
      <FAIcon type="BOX" icon={props.icon} />
    </span>
  );
}
