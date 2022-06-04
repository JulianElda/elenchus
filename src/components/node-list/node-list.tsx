import { memo, useCallback, useContext } from "react";
import { Entry } from "types";
import { AppContext } from "components/app/app.context";
import NodeListItem from "./node-list-item";
import { nodeListSorterFunction } from "./node-list-sorter";
import {downloadFromId, getDownloadId} from "components/common/download"

type NodelistProp = {
  items: Entry[];
  onHandleFolder: Function;
  showCheckbox: boolean;
};

const NodeList = memo(function (props: NodelistProp) {
  const clientConfiguration = useContext<any>(AppContext).clientConfiguration;

  // download a single item
  const downloadItem = useCallback(
    function (itemId, itemName) {
      const payload = [
        {
          itemId: itemId,
        },
      ];
      getDownloadId(payload, null)
        .then((res) => {
          downloadFromId(res.data, clientConfiguration.csfrToken);
        })
        .catch(() => {});
    },
    [clientConfiguration.csfrToken]
  );

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
          showCheckbox={props.showCheckbox}
        />
      );
    });
  };

  return <ul className="list-group">{mapitemList()}</ul>;
});

export default NodeList;
