import { memo, useCallback, useContext } from "react";
import api from "api/api";
import { EntryItemType } from "types";
import { AppContext, AppContextType } from "components/app";
import { downloadFromId } from "components/common/download";
import { NodeListItem, nodeListSorterFunction } from "components/node-list";

type NodelistProp = {
  items: EntryItemType[];
  onHandleFolder: Function;
};

export const NodeList = memo(function (props: NodelistProp) {
  const clientConfiguration =
    useContext<AppContextType>(AppContext).clientConfiguration;

  // download a single item
  const downloadItem = useCallback(
    function (itemId: string, itemName: string) {
      const payload = [
        {
          itemId: itemId,
          itemName: itemName,
        },
      ];
      const downloadItemsCallback = function (res: string) {
        downloadFromId(res, clientConfiguration.csfrToken);
      };
      api.getDownloadId(payload, null, downloadItemsCallback);
    },
    [clientConfiguration.csfrToken]
  );

  const mapItemList = () => {
    return props.items
      .sort(nodeListSorterFunction())
      .map((item: EntryItemType) => {
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
