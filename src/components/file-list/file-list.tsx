import React, { useCallback, useMemo, useReducer, useState } from "react";
import { file_api } from "api/api-faker";
import { BoxType, EntryItemType } from "types";
import { Breadcrumbs, BreadcrumbType } from "components/breadcrumbs";
import { FileListEmpty } from "components/file-list";
//import { FileListToolbar } from "components/file-list-toolbar";
import { NodeList } from "components/node-list";

const selectedItemsReducer = function (state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.id];
    case "remove":
      return state.filter(function (i) {
        return i !== action.id;
      });
    case "clear":
      return [];
    default:
      return state;
  }
};

export const FileListContext = React.createContext({});

type FileListProp = {
  breadcrumbs: BreadcrumbType[];
  items: EntryItemType[];
  box: BoxType;
};

export function FileList(props: FileListProp) {
  const [items, setItems] = useState<EntryItemType[]>(props.items);
  const [loading, setLoading] = useState<boolean>(false);
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbType[]>(
    props.breadcrumbs
  );
  const [, dispatchSelectedItems] = useReducer(selectedItemsReducer, []);

  const handleSelectedItems = useCallback(dispatchSelectedItems, [
    dispatchSelectedItems,
  ]);

  const loadDirectory = useCallback(
    function (folderId: string, folderName: string) {
      const getBoxChildrenCallback = function (res) {
        setItems(res.entries);
        setLoading(false);
      };
      setBreadcrumbs((old) => {
        return old.concat({ id: folderId, name: folderName });
      });
      dispatchSelectedItems({ type: "clear" });
      setLoading(true);
      file_api.getBoxChildren(props.box.id!, folderId, getBoxChildrenCallback);
    },
    [props.box.id]
  );

  const getFileListContent = function () {
    if (items.length === 0) {
      return <FileListEmpty />;
    } else if (loading) {
      return <p>loading items...</p>;
    } else {
      return <NodeList items={items} onHandleFolder={loadDirectory} />;
    }
  };

  // values to pass down the FileListContext,
  // use useMemo so the reference of the object does not change
  const contextValue = useMemo(
    () =>
      // return context value
      ({
        box: props.box,
        onHandleSelected: handleSelectedItems,
      }),
    [handleSelectedItems, props.box]
  );

  return (
    <React.StrictMode>
      <FileListContext.Provider value={contextValue}>
        <div>
          <Breadcrumbs
            items={breadcrumbs}
            onClick={loadDirectory}
            setItems={setBreadcrumbs}
          />
          {getFileListContent()}
        </div>
      </FileListContext.Provider>
    </React.StrictMode>
  );
}
