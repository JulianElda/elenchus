import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "api/api";
import { UserType } from "types";
import { getUserList, init, userListLoaded } from "store/user-list";
import { UserList } from "components/user-list";

export function UserListResolver() {
  const dispatch = useDispatch();
  const loaded = useSelector(userListLoaded);
  const userList = useSelector(getUserList);
  //const [userList, setUserList] = useState<UserType[]>([]);
  //const [paginating, setPaginating] = useState<boolean>(true);

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
        dispatch(init(tmp.current));
      }
    };

    const loadUsers = function (start: number) {
      api.paginateUser(limit, start, paginateUserCallback);
    };

    if (!loaded) loadUsers(index.current);
  }, [dispatch, loaded]);

  if (!loaded) {
    return <p>loading users...</p>;
  } else {
    return <UserList users={userList} />;
  }
}
