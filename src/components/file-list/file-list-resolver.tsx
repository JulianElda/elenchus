import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import api from "api/api";
import { BoxType, EntryItemResponseType, EntryItemType } from "types";
import { BreadcrumbType } from "components/breadcrumbs";
import { FileList } from "components/file-list";

type FinderListStateNavigateType = {
  folderId: string;
  breadcrumbs: BreadcrumbType[];
};

export function FileListResolver() {
  const { state } = useLocation();
  const params = useParams();

  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbType[]>([]);
  const [box, setBox] = useState<BoxType>();
  const [items, setItems] = useState<EntryItemType[]>([]);
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    setLoading(true);

    const getBoxChildrenCallback = function (res: EntryItemResponseType) {
      setItems(() => res.entries);
      setLoading(false);
    };

    const getBoxCallback = function (res: BoxType) {
      let tmp = res;
      tmp.id = params.boxId!;
      setBox(res);
      setItems(res.rootFolder.entries);
      setBreadcrumbs([
        {
          id: res.rootFolder.id,
          name: res.rootFolder.name,
        },
      ]);

      if (!state) {
        setLoading(false);
        return;
      }
      const { folderId, breadcrumbs } = state as FinderListStateNavigateType;
      if (!folderId) {
        setLoading(false);
        return;
      }
      setBreadcrumbs(breadcrumbs);
      api.getBoxChildren(params.boxId!, folderId, getBoxChildrenCallback);
    };

    api.getBox(params.boxId!, getBoxCallback);
  }, [params.boxId, state]);

  if (loading) {
    return <p>loading box...</p>;
  } else if (!box?.id || !items) {
    return <p>loading items...</p>;
  } else {
    return <FileList items={items} box={box} breadcrumbs={breadcrumbs} />;
  }
}
