import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "api/axios";

import FileList from "./file-list";

export default function FileListResolver() {
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [box, setBox] = useState<any>();

  useEffect(() => {
    axios
      .get("/uiapi/BoxAPI/v1/rest/boxes/" + params.boxId, {})
      .then((res) => {
        let tmp = res.data;
        tmp.id = params.boxId;
        setBox(res.data);
        setLoading(false);
      })
      .catch((res) => {});
  }, [params.boxId]);

  if (loading) {
    return <p>loading items...</p>;
  } else {
    return <FileList rootFolder={box.rootFolder} box={box} />;
  }
}
