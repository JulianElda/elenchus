import { useState } from "react";

import BoxListSortSelect, { boxListSorterFunction } from "./box-list-sorter";
import BoxListSearcher, { boxListSearcherFunction } from "./box-list-searcher";
import BoxListItem from "./box-list-item";
import { IdgardBox } from "types";

type BoxListProp = {
  boxes: IdgardBox[];
};

export default function BoxList(props: BoxListProp) {

  const [boxListSort, setBoxListSort] = useState<string>("name");
  const [boxListSearch, setBoxListSearch] = useState<string>("");
  //const [boxList] = useState<any[]>(props.boxes);

  const mapBoxList = () => {
    return props.boxes
      .filter(boxListSearcherFunction(boxListSearch))
      .sort(boxListSorterFunction(boxListSort))
      .map((box: IdgardBox) => {
      return (
        <BoxListItem key={box.id}
          id={box.id} name={box.name} type={box.type}/>
      )
    })
  }

  const onChangeSort = (cat: string) => {
    setBoxListSort(cat);
  }

  const onChangeSearch = (query: string) => {
    setBoxListSearch(query);
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <BoxListSearcher onChangeSearch={onChangeSearch} />
        </div>
        <div className="col-md-6">
          <BoxListSortSelect onChangeSort={onChangeSort} />
        </div>
      </div>
      <ul className="list-group">
        {mapBoxList()}
      </ul>
    </div>
  );
}