import { useState } from "react";

import UserListItem from "./user-list-item";

export default function UserList(props) {
  const [userList] = useState<any[]>(props.users);

  const mapUserList = () => {
    console.log(userList)
    return userList.map((user) => {
      return (
        <UserListItem
          key={user.id}
          id={user.id}
          name={user.userInfos.name}
        />
      );
    });
  }


  return (
    <div>
      <table className="table table-hover">
        <tbody>
        {mapUserList()}
        </tbody>
      </table>
    </div>
  );
}