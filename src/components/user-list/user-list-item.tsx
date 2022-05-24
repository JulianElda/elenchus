import { useNavigate } from "react-router-dom";

export default function UserListItem(props) {

  const navigate = useNavigate();

  const onClick = (id: string) => {
    navigate("/user/" + id);
  }

  return (
    <tr onClick={e => {onClick(props.id)}}>
      <td>{props.id}</td>
      <td>{props.name}</td>
    </tr>
  );
}