import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserType } from "types";
import { getUserList, loadUsers, userListLoaded } from "store/user-list";
import { UserList } from "components/user-list";

export function UserListResolver() {
  const dispatch = useDispatch();
  const loaded: boolean = useSelector(userListLoaded);
  const userList: UserType[] = useSelector(getUserList);

  useEffect(
    function () {
      // TODO: correct type
      if (!loaded)
        // @ts-ignore
        dispatch(loadUsers());
    },
    [dispatch, loaded]
  );

  if (!loaded) {
    return <p>loading users...</p>;
  } else {
    return <UserList users={userList} />;
  }
}
