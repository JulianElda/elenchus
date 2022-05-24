import { useNavigate, useParams } from "react-router-dom";

import FileListItemIcon from "./file-list-item-icon";

export default function FileListItem(props) {

  const navigate = useNavigate();
  const params = useParams();

  const onClick = (id: string, type: string, name: string) => {
    if (type === "DIR")
      navigate("/box/" + params.boxId + "/" + id)
  }

  return (
    <li className="list-group-item"
      onClick={e => onClick(props.id, props.type, props.name)}>
      <FileListItemIcon type={props.type} name={props.name}/>
      <span>{props.name}</span>
    </li>
  );
}