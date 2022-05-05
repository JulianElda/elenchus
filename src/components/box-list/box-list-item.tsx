import { useNavigate } from "react-router-dom";

export default function BoxListItem(props) {

  const navigate = useNavigate();

  const onNavigateBox = () => {
    console.log("onNavigateBox " + props.id)
    navigate("/file/" + props.id)
  }

  return (
    <li className="list-group-item" onClick={onNavigateBox}>
      {props.name}
    </li>
  );
}