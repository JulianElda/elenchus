import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { finderListSorterFunction } from "./finder-list-sorter";
import FinderListItem from "./finder-list-item";
import { AppContext } from "components/app/app.context";
import api from "api/api";
import { downloadFromId } from "components/common/download";
import { BreadcrumbItem } from "components/breadcrumbs/breadcrumbs";
import { NodeInfo } from "types/NodeInfo";

type FinderListItemType = {
  item: NodeInfo;
  boxId: string;
};

type FinderListProps = {
  items: FinderListItemType[];
};

export default function FinderList(props: FinderListProps) {
  const navigate = useNavigate();
  const clientConfiguration = useContext<any>(AppContext).clientConfiguration;

  const handleFolder = useCallback(
    function (folderId: string, boxId: string, breadcrumbs: BreadcrumbItem[]) {
      navigate("/box/" + boxId, {
        state: { folderId: folderId, breadcrumbs: breadcrumbs },
      });
    },
    [navigate]
  );

  const handleFile = useCallback(
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

  const getBreadcrumbs = function (item: NodeInfo) {
    const breadcrumbs: BreadcrumbItem[] = [
      {
        id: item.node?.id || "",
        name: item.node?.name || "",
      },
    ];
    let parent = item.parent;
    while (parent !== null) {
      breadcrumbs.unshift({
        id: parent?.node?.id || "",
        name: parent?.node?.name || "",
      });
      parent = parent?.parent;
    }
    return breadcrumbs;
  };

  const getPath = function (breadcrumbs: BreadcrumbItem[]) {
    return breadcrumbs
      .map(function (breadcrumb: BreadcrumbItem) {
        return breadcrumb.name;
      })
      .join("/");
  };

  const mapFinderItem = function (item: NodeInfo, boxId: string) {
    let breadcrumbs = getBreadcrumbs(item);
    return {
      id: item.node?.id,
      name: item.node?.name,
      type: item.type,
      breadcrumbs: breadcrumbs,
      path: getPath(breadcrumbs),
      boxId: boxId,
    };
  };

  const mapItemList = function () {
    return props.items
      .map(function (item: FinderListItemType) {
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
            breadcrumbs={item.breadcrumbs}
            path={item.path}
            onHandleFile={handleFile}
            onHandleFolder={handleFolder}
          />
        );
      });
  };

  return <ul className="list-group">{mapItemList()}</ul>;
}
