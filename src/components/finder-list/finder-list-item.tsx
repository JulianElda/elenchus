import { memo } from "react";
import NodeListItemIcon from "components/node-list/node-list-item-icon";
import { BreadcrumbItem } from "components/breadcrumbs/breadcrumbs";

type FinderListItemProps = {
  id?: string;
  name?: string;
  type?: string;
  boxId?: string;
  breadcrumbs?: BreadcrumbItem[];
  path?: string;
  onHandleFile?: Function;
  onHandleFolder?: Function;
};

const FinderListItem = memo(function (props: FinderListItemProps) {
  const onClick = function () {
    if (props.type === "DIR") props.onHandleFolder?.(props.id, props.boxId, props.breadcrumbs);
    else if (props.type === "FILE") props.onHandleFile?.(props.id, props.name);
  };

  return (
    <li className="list-group-item finder-list-item" onClick={onClick}>
      <div className="d-flex w-100">
        <NodeListItemIcon type={props.type} name={props.name} />
        <label>{props.name}</label>
      </div>
      <small className="finder-list-item-name font-monospace fw-light">{props.path}</small>
    </li>
  );
});

export default FinderListItem;
