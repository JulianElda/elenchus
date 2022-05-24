import FAIcon from "@common/fa-icon";
import { mimes } from "@const/file";

import "./file-list-item-icon.css";

export default function FileListItemIcon(props) {

  const getItemIcon = (type, name) => {
    if (type === "DIR"){
      return "dir";
    }
    else if (type === "NOTE"){
      return "note";
    }
    else {
      let extension = name.split(".").pop().toLowerCase();      
      for(let mime in mimes) 
        if (mimes[mime].indexOf(extension) >= 0)
          return mime;
      return "gen";
    }
  };

  return (
    <span className="file-list-item-icon">
      <FAIcon type="FILE" icon={getItemIcon(props.type, props.name)} />
    </span>
  );
}