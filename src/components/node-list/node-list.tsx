import { memo, useCallback, useContext } from "react";
import { Entry } from "types";
import { AppContext } from "components/app/app.context";
import NodeListItem from "./node-list-item";
import { nodeListSorterFunction } from "./node-list-sorter";
import api from "api/api";
import { downloadFromId } from "components/common/download";

type NodelistProp = {
  items: Entry[];
  onHandleFolder: Function;
};

const NodeList = memo(function (props: NodelistProp) {
  const clientConfiguration = useContext<any>(AppContext).clientConfiguration;

  // download a single item
  const downloadItem = useCallback(
    function (itemId: string, itemName: string) {
      const payload = [
        {
          itemId: itemId,
          itemName: itemName,
        },
      ];
      const downloadItemsCallback = function (res) {
        downloadFromId(res, clientConfiguration.csfrToken);
      };
      api.getDownloadId(payload, null, downloadItemsCallback);
    },
    [clientConfiguration.csfrToken]
  );

  const mapItemList = () => {
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

  return <ul className="list-group">{mapItemList()}</ul>;
});

export default NodeList;
