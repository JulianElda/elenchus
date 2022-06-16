import { useEffect, useRef, useState } from "react";
import api from "api/api";
import { UserType } from "types";
import { UserList } from "components/user-list";

export function UserListResolver() {
  const [userList, setUserList] = useState<UserType[]>([]);
  const [paginating, setPaginating] = useState<boolean>(true);

  const limit = 50;
  let tmp = useRef<UserType[]>([]);
  let index = useRef<number>(0);

  useEffect(() => {
    const paginateUserCallback = function (res: UserType[]) {
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
