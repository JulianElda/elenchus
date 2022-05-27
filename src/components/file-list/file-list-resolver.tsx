import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Entry } from "types";
import axios from "api/axios";

import FileList from "./file-list";
import FileListEmpty from "./file-list-empty";

export default function FileListResolver() {
  let params = useParams();

  const [itemList, setItemList] = useState<Array<Entry>>([]);
  const [itemsLoading, setItemsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!params.boxId || !params.folderId) return;
    console.log(
      "FileList.loadChildren() " + params.boxId + "/" + params.folderId
    );
    axios
      .get(
        "/uiapi/BoxAPI/v1/rest/children/" +
          params.boxId +
          "/" +
          params.folderId,
        {}
      )
      .then((res) => {
        setItemList(res.data.entries);
        setItemsLoading(false);
      })
      .catch((res) => {});
  }, [params.boxId, params.folderId]);

  if (itemsLoading) {
    return <p>loading items...</p>;
  } else if (itemList.length === 0) {
    return <FileListEmpty />;
  } else {
    return <FileList items={itemList} />;
  }
}
