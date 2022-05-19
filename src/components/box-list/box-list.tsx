import { useEffect, useState } from "react";
import axios from "api/axios";

import BoxListSortSelect, { boxListSorterFunction } from "./box-list-sorter";
import BoxListSearcher, { boxListSearcherFunction } from "./box-list-searcher";
import BoxListItem from "./box-list-item";
import { BoxListType } from "types";

export default function BoxList() {

  const [boxList, setBoxList] = useState([]);

  useEffect(() => {
    console.log("BoxList.loadBoxes()")
    axios.get("/uiapi/BoxAPI/v1/rest/boxes")
    .then((res) => {
      setBoxList(res.data);
    })
    .catch((res) => {
    })
  }, [])

  if (boxList.length === 0) {
    return (
      <p>loading boxes...</p>
    );
  }
  else {
    return (
      <BoxListLayout boxes={boxList}/>
    );
  }
}

function BoxListLayout(props) {

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