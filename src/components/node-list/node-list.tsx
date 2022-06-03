import { useOutletContext } from "react-router-dom";
import axios from "api/axios";

import { Entry } from "types";
import NodeListItem from "./node-list-item";
import { nodeListSorterFunction } from "./node-list-sorter";

type NodelistProp = {
  items: Entry[];
  onHandleFolder: Function;
};

export default function NodeList(props: NodelistProp) {
  const clientConfiguration = useOutletContext<any>()?.[0];

  const downloadFromId = function (downloadId, csfr) {
    const url =
      "/uiapi/FileAPI/v1/rest/dnld?downloadId=" +
      downloadId +
      "&type=''&csfr=" +
      csfr;
    window.location.href = url;
  };

  const getDownloadId = function (payload, override) {
    return axios.post(
      "/uiapi/FileAPI/v1/rest/gdid?" +
        (override == null ? "" : "&override=" + encodeURIComponent(override)),
      payload
    );
  };

  const downloadItem = function (itemId, itemName) {
    const payload = [
      {
        itemId: itemId,
        itemName: itemName,
      },
    ];
    getDownloadId(payload, null)
      .then((res) => {
        downloadFromId(res.data, clientConfiguration.csfrToken);
      })
      .catch(() => {});
  };

  const mapitemList = () => {
    return props.items.sort(nodeListSorterFunction()).map((item: Entry) => {
      return (
        <NodeListItem
          key={item.id}
          id={item.id}
          type={item.type}
          name={item.name}
          onHandleFile={downloadItem}
          onHandleFolder={props.onHandleFolder}
        />
      );
    });
  };

  return <ul className="list-group">{mapitemList()}</ul>;
}
