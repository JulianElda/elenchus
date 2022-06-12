import { useEffect, useRef, useState } from "react";
import { UserWrapper } from "types";
import UserList from "./user-list";
import api from "api/api";

export default function UserListResolver() {
  const [userList, setUserList] = useState<UserWrapper[]>([]);
  const [paginating, setPaginating] = useState<boolean>(true);

  const limit = 50;
  let tmp = useRef<UserWrapper[]>([]);
  let index = useRef<number>(0);

  useEffect(() => {
    const paginateUserCallback = function (res) {
      tmp.current = tmp.current.concat(res);
      if (res.length === limit) {
        index.current += limit;
        loadUsers(index.current);
      } else {
        setUserList(tmp.current);
        setPaginating(false);
      }
    };
    const loadUsers = function (start: number) {
      api.paginateUser(limit, start, paginateUserCallback);
    };
    loadUsers(index.current);
  }, []);

  if (paginating) {
    return <p>loading users...</p>;
  } else {
    return <UserList users={userList} />;
  }
}
