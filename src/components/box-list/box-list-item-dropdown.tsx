import FAIcon from "components/common/fa-icon";

import "./box-list-item-dropdown.scss";

type BoxListItemDropdownProps = {
  id?: string;
};

export function BoxListItemDropdown(props: BoxListItemDropdownProps) {
  const onClickDropdown = (e) => {
    e.stopPropagation();
  };

  return (
    <span className="dropdown box-list-item-dropdown" onClick={onClickDropdown}>
      <button
        className="btn dropdown-toggle"
        type="button"
        id={"box-list-item-dropdown-" + props.id}
        data-bs-toggle="dropdown"
        aria-expanded="false">
        <FAIcon type="GENERAL" icon="MENU" />
      </button>
      <ul
        className="dropdown-menu"
        aria-labelledby={"box-list-item-dropdown-" + props.id}>
        <li>
          <span className="dropdown-item">Action</span>
        </li>
        <li>
          <span className="dropdown-item">Action 2</span>
        </li>
      </ul>
    </span>
  );
}
