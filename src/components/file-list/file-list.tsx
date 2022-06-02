import { useState } from "react";
import axios from "api/axios";
import { Entry, IdgardBox } from "types";
import FileListEmpty from "./file-list-empty";
import Breadcrumbs from "components/breadcrumb";
import FileListToolbar from "components/file-list-toolbar/file-list-toolbar";
import NodeList from "components/node-list/node-list";

type FileListProp = {
  rootFolder: any;
  box: IdgardBox;
};

export default function FileList(props: FileListProp) {
  const [items, setItems] = useState<Entry[]>(props.rootFolder.entries);
  const [breadcrumbs, setBreadcrumbs] = useState<any[]>([
    {
      id: props.rootFolder.id,
      name: props.rootFolder.name,
    },
  ]);
  const loadDirectory = function (folderId: string, folderName: string) {
    setBreadcrumbs((old) => {
      return old.concat({ id: folderId, name: folderName });
    });
    axios
      .get(
        "/uiapi/BoxAPI/v1/rest/children/" + props.box.id + "/" + folderId,
        {}
      )
      .then((res) => {
        setItems(res.data.entries);
      })
      .catch((res) => {});
  };

  const getFileListContent = function () {
    if (items.length === 0) {
      return <FileListEmpty />;
    } else {
      return <NodeList items={items} onNavigateFolder={loadDirectory} />;
    }
  };

  return (
    <div>
      <FileListToolbar box={props.box} />
      <Breadcrumbs
        items={breadcrumbs}
        onClick={loadDirectory}
        setItems={setBreadcrumbs}
      />
      {getFileListContent()}
    </div>
  );
}
