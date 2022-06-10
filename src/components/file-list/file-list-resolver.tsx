import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "api/axios";

import FileList from "./file-list";

export default function FileListResolver() {
  const { state } = useLocation();
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [box, setBox] = useState<any>();
  const [items, setItems] = useState<any[]>([]);
  const [breadcrumbs, setBreadcrumbs] = useState<any>([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/uiapi/BoxAPI/v1/rest/boxes/" + params.boxId, {})
      .then((res) => {
        let tmp = res.data;
        tmp.id = params.boxId;
        setBox(res.data);
        setBreadcrumbs([{
          id: res.data.rootFolder.id,
          name: res.data.rootFolder.name,
        }]);
        setItems(res.data.rootFolder.entries);
        setLoading(false);
      })
      .catch((res) => {});
  }, [params.boxId]);

  useEffect(() => {
    if (!state) return;
    const { folderId } = state as any;
    if (!folderId) return;

    setLoading(true);
    axios
      .get(
        "/uiapi/BoxAPI/v1/rest/children/" + params.boxId + "/" + folderId,
        {}
      )
      .then((res) => {
        setItems(() => (res.data.entries));
        setLoading(false);
      })
      .catch((res) => {});
  }, [params.boxId, state]);

  if (loading) {
    return <p>loading items...</p>;
  }
  else if (!box?.id) {
    return <p>loading box...</p>;
  }
  else {
    return <FileList items={items} box={box} breadcrumbs={breadcrumbs} />;
  }
}
