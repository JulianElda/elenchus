import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import FileListItem from "./file-list-item";
//import { ItemList } from "./../../types/types";

export default function FileList() {

  let params = useParams();

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    axios.get("/uiapi/BoxAPI/v1/rest/boxes/" + params.boxId, {
      headers: { "X-IDGARD-CSFR": ""+localStorage.getItem("csfrToken") }
    })
    .then((res) => {
      setItemList(res.data.rootFolder.entries);
      console.log(JSON.stringify(itemList));

    })
    .catch((res) => {
      console.log("catch " + res.data);
    })
  }, [])

  const mapitemList = () => {
    return itemList.map((item: any) => {
      return (
        <FileListItem key={item.id} name={item.name}/>
      )
    })
  }

  return (
    <div>
      <h2>file-list</h2>
      <ul className="list-group">
        {mapitemList()}
      </ul>
    </div>
  );
}