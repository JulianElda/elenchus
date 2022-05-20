import { useState } from "react";

import BoxListSortSelect, { boxListSorterFunction } from "./box-list-sorter";
import BoxListSearcher, { boxListSearcherFunction } from "./box-list-searcher";
import BoxListItem from "./box-list-item";
import { BoxListType } from "@types";

export default function BoxList(props) {

  const [boxListSort, setBoxListSort] = useState("name");
  const [boxListSearch, setBoxListSearch] = useState("");
  const [boxList] = useState<any[]>(props.boxes);

  const mapBoxList = () => {
    return boxList
      .filter(boxListSearcherFunction(boxListSearch))
      .sort(boxListSorterFunction(boxListSort))
      .map((box: BoxListType) => {
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
      <h3>box-list</h3>
      <BoxListSortSelect onChangeSort={onChangeSort} />
      <BoxListSearcher onChangeSearch={onChangeSearch} />
      <ul className="list-group">
        {mapBoxList()}
      </ul>
    </div>
  );
}