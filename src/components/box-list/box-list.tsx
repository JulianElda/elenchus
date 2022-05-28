import { useState } from "react";

import BoxListSortSelect, { boxListSorterFunction } from "./box-list-sorter";
import BoxListSearcher, { boxListSearcherFunction } from "./box-list-searcher";
import BoxListItem from "./box-list-item";
import BoxListNoboxes from "./box-list-noboxes";
import BoxListNoresult from "./box-list-noresult";

import { IdgardBox } from "types";

type BoxListProp = {
  boxes: IdgardBox[];
};

export default function BoxList(props: BoxListProp) {
  const [boxListSort, setBoxListSort] = useState<string>("name");
  const [boxListSearch, setBoxListSearch] = useState<string>("");

  const mapBoxList = () => {
    return props.boxes
      .filter(boxListSearcherFunction(boxListSearch))
      .sort(boxListSorterFunction(boxListSort))
      .map((box: IdgardBox) => {
        return (
          <BoxListItem
            key={box.id}
            id={box.id}
            name={box.name}
            type={box.type}
          />
        );
      });
  };

  const onChangeSort = (cat: string) => {
    setBoxListSort(cat);
  };

  const onChangeSearch = (query: string) => {
    setBoxListSearch(query);
  };

  const boxListWithoutResult = <BoxListNoresult />;
  const boxListWithResult = <ul className="list-group">{mapBoxList()}</ul>;

  if (props.boxes.length === 0) {
    return <BoxListNoboxes />;
  }

  return (
    <div>
      <div className="row mb-2">
        <div className="col-md-6">
          <BoxListSearcher onChangeSearch={onChangeSearch} />
        </div>
        <div className="col-md-6">
          <BoxListSortSelect onChangeSort={onChangeSort} />
        </div>
      </div>
      {mapBoxList().length > 0 ? boxListWithResult : boxListWithoutResult}
    </div>
  );
}
