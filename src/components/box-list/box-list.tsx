import { useEffect, useState } from "react";
import axios from "api/axios";

import BoxListItem from "./box-list-item";
import { BoxListType } from "types";

export default function BoxList() {

  const [boxList, setBoxList] = useState([]);

  useEffect(() => {
    axios.get("/uiapi/BoxAPI/v1/rest/boxes")
    .then((res) => {
      setBoxList(res.data);
    })
    .catch((res) => {
    })
  }, [])

  const mapBoxList = () => {
    return boxList.map((box: BoxListType) => {
      return (
        <BoxListItem key={box.id}
          id={box.id} name={box.name}/>
      )
    })
  }

  return (
    <div>
      <h3>box-list</h3>
      <ul className="list-group">
        {mapBoxList()}
      </ul>
    </div>
  );
}