import { useEffect, useState } from "react";
import axios from "@api/axios";
import { UserWrapper } from "@types";
import UserList from "./user-list";

export default function UserListResolver() {

  const [userList, setUserList] = useState<UserWrapper[]>([]);
  const [paginating, setPaginating] = useState<boolean>(true);
  const limit = 5;
  let tmp = []

  const loadUsers = (start) => {
    console.log("UserListResolver.loadUsers() " + start)
    axios.get("/uiapi/UserManagementAPI/v1/rest/users_partial?limit=" + limit + "&offset=" + start)
    .then((res) => {
      tmp = tmp.concat(res.data)
      if (res.data.length === limit) {
        loadUsers(start + limit)
      }
      else {
        setUserList(tmp)
        setPaginating(false);
      }
    })
    .catch((res) => {
    })
  }

  useEffect(() => {
    loadUsers(0)
  }, []);

  if (paginating) {
    return (
      <p>loading users...</p>
    );
  }
  else {
    return (
      <UserList users={userList}/>
    );
  }

}