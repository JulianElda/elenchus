import FAIcon from "components/common/fa-icon";
import { EntryItemTypes } from "types";
import { mimes } from "const/file";

import "./node-list-item-icon.scss";

type NodeListItemIconProps = {
  type: EntryItemTypes;
  name: string;
};

export function NodeListItemIcon(props: NodeListItemIconProps) {
  const getItemIcon = (type: string, name: string) => {
    if (type === "DIR") {
      return "dir";
    } else if (type === "NOTE") {
      return "note";
    } else {
      let extension = name?.split(".")?.pop()?.toLowerCase();
      for (let mime in mimes)
        if (mimes[mime].indexOf(extension) >= 0) return mime;
      return "gen";
    }
  };

  return (
    <span className="node-list-item-icon ml-3 mr-2 h-6">
      <FAIcon type="FILE" icon={getItemIcon(props.type, props.name)} />
    </span>
  );
}
