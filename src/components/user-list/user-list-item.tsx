import { useNavigate } from "react-router-dom";
import { UserType } from "types";

type UserListItemProps = {
  user: UserType;
};

export function UserListItem(props: UserListItemProps) {
  const navigate = useNavigate();

  const onClick = (id: string) => {
    navigate(id);
  };

  return (
    <tr
      onClick={(e) => {
        onClick(props.user.id);
      }}>
      <td>{props.user.userInfos.name}</td>
      <td>{props.user.userInfos.email}</td>
      <td>{props.user.userInfos.type}</td>
    </tr>
  );
}
