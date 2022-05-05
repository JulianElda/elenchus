import { useEffect, useState } from "react";
import axios from "axios";

import BoxListItem from "./box-list-item";
import { BoxListType } from "./../../types/types";

export default function BoxList() {

  const [boxList, setBoxList] = useState([]);

  useEffect(() => {
    axios.get("/uiapi/BoxAPI/v1/rest/boxes", {
      headers: { "X-IDGARD-CSFR": ""+localStorage.getItem("csfrToken") }
    })
    .then((res) => {
      setBoxList(res.data);

    })
    .catch((res) => {
      console.log("catch " + res.data);
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
      <h2>box-list</h2>
      <ul className="list-group">
        {mapBoxList()}
      </ul>
    </div>
  );
}