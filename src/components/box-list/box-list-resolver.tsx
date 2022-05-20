import { useEffect, useState } from "react";
import axios from "@api/axios";

import BoxList from "./box-list";

export default function BoxListResolver() {

  const [boxList, setBoxList] = useState([]);

  // TODO paginator

  useEffect(() => {
    console.log("BoxListResolver.loadBoxes()")
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
      <BoxList boxes={boxList}/>
    );
  }
}