import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

import "./box-list-item.css";

const boxIcons = {
  "FILE": solid("dog"),
  "DATAROOM": solid("euro-sign"),
  "TEMPORARY": solid("bugs")
}

export default function BoxListItem(props) {

  const navigate = useNavigate();

  const onNavigateBox = () => {
    navigate("/box/" + props.id)
  }

  return (
    <li className="list-group-item" onClick={onNavigateBox}>
      <span className="box-list-item_icon"><FontAwesomeIcon icon={boxIcons[props.type]} /></span>
      <span>{props.name}</span>
    </li>
  );
}