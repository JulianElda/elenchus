import { memo } from "react";
import { UserWrapper } from "idg-types";

type UserListSearcherProps = {
  onChangeSearch: Function;
};

const UserListSearcher = memo(function (props: UserListSearcherProps) {
  const onChangeText = (query: string) => {
    props.onChangeSearch(query);
  };

  return (
    <input
      type="text"
      className="form-control"
      id="user-list-searcher"
      placeholder="Search"
      onChange={(e) => onChangeText(e.target.value)}
    />
  );
});

export function userListSearcherFunction(query: string) {
  return function (user: UserWrapper) {
    let searchable = user.userInfos?.name || "";
    return searchable.toLowerCase().indexOf(query.toLowerCase()) >= 0;
  };
}
export default UserListSearcher;
