export default function UserListItem(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
    </tr>
  );
}