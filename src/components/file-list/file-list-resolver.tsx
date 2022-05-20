import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "@api/axios";

import FileList from "./file-list";

export default function FileListResolver() {

  let params = useParams();

  const [itemList, setItemList] = useState<Array<any>>([]);

  useEffect(() => {
    console.log("FileList.loadBoxItems() " + params.boxId)
    axios.get("/uiapi/BoxAPI/v1/rest/boxes/" + params.boxId, {})
    .then((res) => {
      setItemList(res.data.rootFolder.entries);
    })
    .catch((res) => {
    })
  }, [params.boxId])

  if (itemList.length === 0) {
    return (
      <p>loading items...</p>
    );
  }
  else {
    return (
      <FileList items={itemList} />
    );
  }
}
