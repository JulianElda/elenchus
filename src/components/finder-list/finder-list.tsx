import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "api/api";
import { FinderItemType } from "types";
import { AppContext, AppContextType } from "components/app";
import { BreadcrumbType } from "components/breadcrumbs";
import { downloadFromId } from "components/common/download";
import {
  FinderListItem,
  finderListSorterFunction,
} from "components/finder-list";

type FinderListItemType = {
  item: FinderItemType;
  boxId: string;
};

type FinderListProps = {
  items: FinderListItemType[];
};

export function FinderList(props: FinderListProps) {
  const navigate = useNavigate();
  const clientConfiguration =
    useContext<AppContextType>(AppContext).clientConfiguration;

  const handleFolder = useCallback(
    function (folderId: string, boxId: string, breadcrumbs: BreadcrumbType[]) {
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

  const getBreadcrumbs = function (item: FinderItemType) {
    const breadcrumbs: BreadcrumbType[] = [
      {
        id: item.node?.id!,
        name: item.node?.name!,
      },
    ];
    let parent = item.parent;
    while (parent !== null) {
      breadcrumbs.unshift({
        id: parent?.node?.id!,
        name: parent?.node?.name!,
      });
      parent = parent?.parent;
    }
    return breadcrumbs;
  };

  const getPath = function (breadcrumbs: BreadcrumbType[]) {
    return breadcrumbs
      .map(function (breadcrumb: BreadcrumbType) {
        return breadcrumb.name;
      })
      .join("/");
  };

  const mapFinderItem = function (item: FinderItemType, boxId: string) {
    let breadcrumbs = getBreadcrumbs(item);
    return {
      id: item.node?.id,
      name: item.node?.name,
      type: item.type,
      breadcrumbs: breadcrumbs,
      path: getPath(breadcrumbs),
      boxId: boxId,
      onHandleChange: handleFile,
      onHandleFolder: handleFolder,
    };
  };

  const mapItemList = function () {
    return props.items
      .map(function (item: FinderListItemType) {
        return mapFinderItem(item.item, item.boxId);
      })
      .sort(finderListSorterFunction())
      .map(function (item) {
        return <FinderListItem key={item.id} {...item} />;
      });
  };

  return <ul className="list-group">{mapItemList()}</ul>;
}
