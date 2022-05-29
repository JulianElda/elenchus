import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Entry } from "types";
import axios from "api/axios";

import FileList from "./file-list";
import FileListEmpty from "./file-list-empty";

import { breadcrumbState } from "components/breadcrumb/breadcrumb.atom";

export default function FileListResolver(props) {
  let params = useParams();

  const [itemList, setItemList] = useState<Array<Entry>>([]);
  const [itemsLoading, setItemsLoading] = useState<boolean>(true);
  const [box, setBox] = useState<any>(props.box);
  const [, setBreadcrumbs] = useRecoilState<any>(breadcrumbState);

  useEffect(() => {
    if (props.box) return;
    axios
      .get("/uiapi/BoxAPI/v1/rest/boxes/" + params.boxId, {})
      .then((res) => {
        let tmp = res.data;
        tmp.id = params.boxId;
        setBox(res.data);
      })
      .catch((res) => {});
  }, [params.boxId, props.box]);

  useEffect(() => {
    if (!params.boxId || !params.folderId) return;

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
        setBreadcrumbs((prev) => [
          ...prev,
          {
            url: "/" + params.boxId + "/" + params.folderId,
            name: res.data.name,
          },
        ]);
      })
      .catch((res) => {});
  }, [params.boxId, params.folderId, setBreadcrumbs]);

  if (itemsLoading) {
    return <p>loading items...</p>;
  } else if (itemList.length === 0) {
    return <FileListEmpty />;
  } else {
    return <FileList items={itemList} box={box} />;
  }
}
