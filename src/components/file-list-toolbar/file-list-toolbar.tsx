import { useContext } from "react";
import { AppContext } from "components/app/app.context";
import { FileListContext } from "components/file-list/file-list";
import { downloadFromId, getDownloadId } from "components/common/download";

import FileListToolbarShare from "./file-list-toolbar-share";
import "./file-list-toolbar.scss";

type FileListToolbarProps = {
  selectedItems: string[];
};

export default function FileListToolbar(props: FileListToolbarProps) {
  const clientConfiguration = useContext<any>(AppContext).clientConfiguration;
  const box = useContext<any>(FileListContext).box;

  const downloadItems = function () {
    const payload = props.selectedItems.map(function (item) {
      return { itemId: item };
    });
    getDownloadId(payload, null)
      .then((res) => {
        downloadFromId(res.data, clientConfiguration.csfrToken);
      })
      .catch(() => {});
  };

  return (
    <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar">
      <div className="btn-group me-2" role="group" aria-label="New folder">
        <button type="button" className="btn btn-dark">
          New folder
        </button>
      </div>
      <div className="btn-group me-2" role="group" aria-label="Upload">
        <button type="button" className="btn btn-dark">
          Upload
        </button>
      </div>
      {props.selectedItems.length > 0 && (
        <div className="btn-group me-2" role="group" aria-label="Upload">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => {
              downloadItems();
            }}>
            Download
          </button>
        </div>
      )}

      <div className="btn-group me-2" role="group" aria-label="Link">
        <button
          type="button"
          className="btn btn-outline-dark dropdown-toggle"
          data-bs-toggle="dropdown"
          id="share-dropdown">
          Link
        </button>
        <FileListToolbarShare
          boxId={box?.id}
          sharingConfig={box?.sharingConfig}
        />
      </div>
      <div className="btn-group" role="group" aria-label="Settings">
        <button type="button" className="btn btn-outline-dark">
          Settings
        </button>
      </div>
    </div>
  );
}
