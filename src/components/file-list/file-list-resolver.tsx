import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "api/axios";

import FileList from "./file-list";

export default function FileListResolver(props) {
  let params = useParams();
  const [itemsLoading, setItemsLoading] = useState<boolean>(true);
  const [box, setBox] = useState<any>();

  useEffect(() => {
    axios
      .get("/uiapi/BoxAPI/v1/rest/boxes/" + params.boxId, {})
      .then((res) => {
        let tmp = res.data;
        tmp.id = params.boxId;
        setBox(res.data);
        setItemsLoading(false);
      })
      .catch((res) => {});
  }, [params.boxId]);

  if (itemsLoading) {
    return <p>loading items...</p>;
  } else {
    return <FileList rootFolder={box.rootFolder} box={box} />;
  }
}
