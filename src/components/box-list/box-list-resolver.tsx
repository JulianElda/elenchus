import { useEffect, useState } from "react";
import axios from "api/axios";
import { IdgardBox } from "types";
import BoxList from "./box-list";

export default function BoxListResolver() {

  const [boxList, setBoxList] = useState<Array<IdgardBox>>([]);
  const [boxLoading, setBoxLoading] = useState<boolean>(true);

  // TODO paginator

  useEffect(() => {
    console.log("BoxListResolver.loadBoxes()")
    axios.get("/uiapi/BoxAPI/v1/rest/boxes")
    .then((res) => {
      setBoxList(res.data);
      setBoxLoading(false);
    })
    .catch((res) => {
    })
  }, [])

  if (boxLoading) {
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