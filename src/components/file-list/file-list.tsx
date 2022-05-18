import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import FileListItem from "./file-list-item";

export default function FileList() {

  let params = useParams();

  const [itemList, setItemList] = useState([]);

  const loadBoxItems = () => {
    console.log("FileList.loadBoxItems()")
    axios.get("/uiapi/BoxAPI/v1/rest/boxes/" + params.boxId, {})
    .then((res) => {
      setItemList(res.data.rootFolder.entries);
    })
    .catch((res) => {
    })
  }

  useEffect(() => {
    loadBoxItems();
  }, [])

  const mapitemList = () => {
    return itemList.map((item: any) => {
      return (
        <FileListItem key={item.id} name={item.name} />
      )
    })
  }

  if (itemList.length == 0) {
    return (
      <>
        <p>loading items...</p>
      </>
    );
  }

  return (
    <div>
      <h3>file-list</h3>
      <ul className="list-group">
        {mapitemList()}
      </ul>
    </div>
  );
}