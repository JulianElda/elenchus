import React, { useCallback, useState } from "react";
import { UserType } from "types";

import {
  UserListItem,
  userListSorterFunction,
  UserListSearcher,
  userListSearcherFunction,
  UserListNoresult,
} from "components/user-list";

type UserListProps = {
  users: UserType[];
};

export function UserList(props: UserListProps) {
  const [userList] = useState<UserType[]>(props.users);
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
        <table className="w-full bg-white divide-y divide-gray-300">
          <thead className="">
            <tr>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Name
              </th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Email
              </th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Type
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">{list}</tbody>
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
