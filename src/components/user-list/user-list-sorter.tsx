import { UserWrapper } from "types"

export function userListSorterFunction() {
  return function (a: UserWrapper, b: UserWrapper) {
    return (a.userInfos?.name || "").localeCompare(b.userInfos?.name || "")
  }
}