import { memo } from "react";
import { BoxListType } from "types";

type BoxListSortSelectProps = {
  onChangeSort: Function;
};

export const BoxListSortSelect = memo(function (props: BoxListSortSelectProps) {
  const onChangeDropdown = (cat: string) => {
    props.onChangeSort(cat);
  };

  return (
    <select className="form-select" aria-label="Sort">
      <option value="name" onClick={(e) => onChangeDropdown("name")}>
        Name
      </option>
      <option value="type" onClick={(e) => onChangeDropdown("type")}>
        Type
      </option>
    </select>
  );
});

export function boxListSorterFunction(sortCategory: string) {
  return function (a: BoxListType, b: BoxListType) {
    if (a[sortCategory].toLowerCase() < b[sortCategory].toLowerCase())
      return -1;
    else if (a[sortCategory].toLowerCase() > b[sortCategory].toLowerCase())
      return 1;
    else return 0;
  };
}
