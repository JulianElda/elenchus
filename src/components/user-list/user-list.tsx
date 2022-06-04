import React, { useState } from "react";
import { UserWrapper } from "types";
import UserListItem from "./user-list-item";

type UserListProps = {
  users: UserWrapper[];
};

export default function UserList(props: UserListProps) {
  const [userList] = useState<UserWrapper[]>(props.users);

  const mapUserList = () => {
    return userList.map((user) => {
      return (
        <UserListItem key={user.id} id={user.id} name={user?.userInfos?.name} />
      );
    });
  };

  return (
    <React.StrictMode>
      <div>
        <table className="table table-hover">
          <tbody>{mapUserList()}</tbody>
        </table>
      </div>
    </React.StrictMode>
  );
}
