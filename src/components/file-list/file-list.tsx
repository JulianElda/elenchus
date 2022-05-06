import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import FileListItem from "./file-list-item";

export default function FileList() {

  let params = useParams();

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    axios.get("/uiapi/BoxAPI/v1/rest/boxes/" + params.boxId, {})
    .then((res) => {
      setItemList(res.data.rootFolder.entries);
    })
    .catch((res) => {
    })
  }, [])

  const mapitemList = () => {
    return itemList.map((item: any) => {
      return (
        <FileListItem key={item.id} name={item.name} />
      )
    })
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