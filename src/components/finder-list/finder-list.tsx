import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { finderListSorterFunction } from "./finder-list-sorter";
import FinderListItem from "./finder-list-item";
import { AppContext } from "components/app/app.context";
import {downloadFromId, getDownloadId} from "components/common/download"

type FinderListItemType = {
  item: any;
  boxId: string;
};

type FinderListProps = {
  items: FinderListItemType[];
};

export default function FinderList(props: FinderListProps) {
  const navigate = useNavigate();
  const clientConfiguration = useContext<any>(AppContext).clientConfiguration;

  const handleFolder = useCallback(
    function (folderId: string, boxId: string) {
      navigate("/box/" + boxId, { state: { folderId: folderId } });
    },
    [navigate]
  );

  const handleFile = useCallback(
    function (itemId: string, itemName: string) {
      const payload = [
        {
          itemId: itemId,
          itemName: itemName
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

  const getPath = function (itemName: string, itemParent: any) {
    const location: any = [];
    let parent = itemParent;
    while (parent !== null) {
      location.unshift(parent.node.name);
      parent = parent.parent;
    }
    return location.join("/") + "/" + itemName;
  };

  const mapFinderItem = function (item, boxId: string) {
    return {
      id: item.node.id,
      name: item.node.name,
      type: item.type,
      path: getPath(item.node.name, item.parent),
      boxId: boxId,
    };
  };

  const mapItemList = function () {
    return props.items
      .map(function (item) {
        return mapFinderItem(item.item, item.boxId);
      })
      .sort(finderListSorterFunction())
      .map(function (item) {
        return (
          <FinderListItem
            key={item.id}
            id={item.id}
            name={item.name}
            type={item.type}
            boxId={item.boxId}
            path={item.path}
            onHandleFile={handleFile}
            onHandleFolder={handleFolder}
          />
        );
      });
  };

  return <ul className="list-group">{mapItemList()}</ul>;
}
