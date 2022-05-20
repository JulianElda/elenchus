import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "@api/axios";

import FileList from "./file-list";

export default function FileListResolver(props) {

  let params = useParams();

  const [itemList, setItemList] = useState<Array<any>>([]);

  useEffect(() => {
    console.log("FileList.loadChildren() " + params.boxId + "/" + params.folderId)
    axios.get("/uiapi/BoxAPI/v1/rest/children/" + params.boxId + "/" + params.folderId, {})
    .then((res) => {
      setItemList(res.data.entries);
    })
    .catch((res) => {
    })
  }, [params.boxId, params.folderId])

  if (itemList.length === 0) {
    return (
      <p>loading items...</p>
    );
  }
  else {
    return (
      <FileList items={itemList}/>
    );
  }
}
