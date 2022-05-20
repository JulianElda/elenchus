import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

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
      <FontAwesomeIcon icon={boxIcons[props.type]} />
      <span>{props.name}</span>
    </li>
  );
}