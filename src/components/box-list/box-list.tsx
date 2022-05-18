import { useEffect, useState } from "react";
import axios from "api/axios";

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
  const mapBoxList = () => {
    return props.boxes.map((box: BoxListType) => {
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