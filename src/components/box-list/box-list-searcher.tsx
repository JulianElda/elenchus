import { memo } from "react";
import { BoxListType } from "types";

type BoxListSearcherProps = {
  onChangeSearch: Function;
};

export const BoxListSearcher = memo(function (props: BoxListSearcherProps) {
  const onChangeText = (query: string) => {
    props.onChangeSearch(query);
  };

  return (
    <input
      type="text"
      className="form-control"
      id="box-list-searcher"
      placeholder="Search"
      onChange={(e) => onChangeText(e.target.value)}
    />
  );
});

export function boxListSearcherFunction(query: string) {
  return function (box: BoxListType) {
    let searchable = box.name + "" + box.description;
    return searchable.toLowerCase().indexOf(query.toLowerCase()) >= 0;
  };
}
