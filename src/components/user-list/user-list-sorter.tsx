import { UserType } from "types";

const typeWeight = {
  FULL_LICENSE: 2,
  GUEST_LICENSE: 1,
  BASIC_LICENSE: 0,
};

export function userListSorterFunction() {
  return function (a: UserType, b: UserType) {
    return (
      typeWeight[b.userInfos.type] - typeWeight[a.userInfos.type] ||
      a.userInfos.name.localeCompare(b.userInfos.name)
    );
  };
}
