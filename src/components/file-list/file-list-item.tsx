import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro'

import { mimes } from "@const/file";

import "./file-list-item.css";

const fileIcons = {
  "dir": regular("folder"),
  "gen": regular("file"),
  "pdf": regular("file-pdf"),
  "doc": regular("file-word"),
  "ppt": regular("file-powerpoint"),
  "xls": regular("file-excel"),
  "zip": regular("file-zipper"),
  "vid": regular("file-video"),
  "img": regular("file-image"),
  "aud": regular("file-audio"),
  "src": regular("file-code"),
  "note": regular("note-sticky"),
}

export default function FileListItem(props) {

  let params = useParams();
  const navigate = useNavigate();

  const getIcon = (type, name) => {
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

  const onClick = (id: string, type: string, name: string) => {
    if (type === "DIR")
      navigate("/box/" + params.boxId + "/" + id)
  }

  return (
    <li className="list-group-item"
      onClick={e => onClick(props.id, props.type, props.name)}>
      <span className="file-list-item_icon"><FontAwesomeIcon icon={fileIcons[getIcon(props.type, props.name)]} /></span>
      <span>{props.name}</span>
    </li>
  );
}