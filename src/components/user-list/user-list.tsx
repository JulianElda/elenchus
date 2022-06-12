import React, { useCallback, useState } from "react";
import { UserWrapper } from "idg-types";
import UserListItem from "./user-list-item";
import { userListSorterFunction } from "./user-list-sorter";
import UserListSearcher, {
  userListSearcherFunction,
} from "./user-list-searcher";
import UserListNoresult from "./user-list-noresult";

type UserListProps = {
  users: UserWrapper[];
};

export default function UserList(props: UserListProps) {
  const [userList] = useState<UserWrapper[]>(props.users);
  const [search, setSearch] = useState<string>("");

  const onChangeSearch = useCallback((query: string) => {
    setSearch(query);
  }, []);

  const mapUserList = () => {
    return userList
      .filter(userListSearcherFunction(search))
      .sort(userListSorterFunction())
      .map((user) => {
        return <UserListItem key={user.id} user={user} />;
      });
  };

  const getUserListContent = function () {
    const list = mapUserList();
    if (list.length === 0) return <UserListNoresult />;
    else
      return (
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
      );
  };

  return (
    <React.StrictMode>
      <div>
        <div className="row mb-2">
          <div className="col">
            <UserListSearcher onChangeSearch={onChangeSearch} />
          </div>
        </div>
        <div>{getUserListContent()}</div>
      </div>
    </React.StrictMode>
  );
}
