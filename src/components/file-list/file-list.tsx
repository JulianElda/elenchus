import React, { useCallback, useMemo, useReducer, useState } from "react";
import axios from "api/axios";
import { Entry, IdgardBox } from "types";
import FileListEmpty from "./file-list-empty";
import Breadcrumbs from "components/breadcrumbs";
import FileListToolbar from "components/file-list-toolbar/file-list-toolbar";
import NodeList from "components/node-list/node-list";

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
  rootFolder: any;
  box: IdgardBox;
};

export default function FileList(props: FileListProp) {
  const [items, setItems] = useState<Entry[]>(props.rootFolder.entries);
  const [loading, setLoading] = useState<boolean>(false);
  const [breadcrumbs, setBreadcrumbs] = useState<any[]>([
    {
      id: props.rootFolder.id,
      name: props.rootFolder.name,
    },
  ]);
  const [selectedItems, dispatchSelectedItems] = useReducer(
    selectedItemsReducer,
    []
  );

  const handleSelectedItems = useCallback(dispatchSelectedItems, [
    dispatchSelectedItems,
  ]);

  const loadDirectory = useCallback(
    function (folderId: string, folderName: string) {
      setBreadcrumbs((old) => {
        return old.concat({ id: folderId, name: folderName });
      });
      dispatchSelectedItems({ type: "clear" });
      setLoading(true);
      axios
        .get(
          "/uiapi/BoxAPI/v1/rest/children/" + props.box.id + "/" + folderId,
          {}
        )
        .then((res) => {
          setItems(res.data.entries);
          setLoading(false);
        })
        .catch((res) => {});
    },
    [props.box.id]
  );

  const getFileListContent = function () {
    if (items.length === 0) {
      return <FileListEmpty />;
    } else if (loading) {
      return <p>loading items...</p>;
    } else {
      return (
        <NodeList
          items={items}
          onHandleFolder={loadDirectory}
        />
      );
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
          <FileListToolbar selectedItems={selectedItems} />
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
