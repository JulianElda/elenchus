import { memo } from "react";
import { IdgardBox } from "types";

type BoxListSearcherProps = {
  onChangeSearch: Function;
};

const BoxListSearcher = memo(function (props: BoxListSearcherProps) {
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
  return function (box: IdgardBox) {
    let searchable = box.name + "" + box.description;
    return searchable.toLowerCase().indexOf(query.toLowerCase()) >= 0;
  };
}
export default BoxListSearcher;
