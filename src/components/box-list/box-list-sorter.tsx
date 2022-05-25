import { IdgardBox } from "@types";

type BoxListSortSelectProps = {
  onChangeSort: Function;
};

export default function BoxListSortSelect(props: BoxListSortSelectProps) {

  const { onChangeSort } = props;

  const onChangeDropdown = (cat: string) => {
    onChangeSort(cat);
  }

  return (
    <select className="form-select" aria-label="Sort">
      <option value="name" onClick={e => onChangeDropdown("name")}>Name</option>
      <option value="type" onClick={e => onChangeDropdown("type")}>Type</option>
    </select>
  );
}

export function boxListSorterFunction(sortCategory: string) {
  return function(a: IdgardBox, b: IdgardBox) {
    if (a[sortCategory] < b[sortCategory])
      return -1
    else
      return 1;
  }
}