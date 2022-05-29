import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "api/axios";

import FileListResolver from "./file-list-resolver";

export default function FileListRootResolver() {
  const navigate = useNavigate();
  const params = useParams();

  const [rootFolderId, setRootFolderId] = useState<string>("");
  const [box, setBox] = useState<any>();

  useEffect(() => {
    axios
      .get("/uiapi/BoxAPI/v1/rest/boxes/" + params.boxId, {})
      .then((res) => {
        setRootFolderId(res.data.rootFolder.id);
        let tmp = res.data;
        tmp.id = params.boxId;
        setBox(tmp);
      })
      .catch((res) => {});
  }, [params.boxId]);

  useEffect(() => {
    navigate("/box/" + params.boxId + "/" + rootFolderId, { replace: true });
  }, [navigate, params.boxId, rootFolderId]);

  if (rootFolderId === "") {
    return <p>loading items...</p>;
  } else {
    return <FileListResolver box={{ box }} />;
  }
}
