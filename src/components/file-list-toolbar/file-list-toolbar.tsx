import { useContext } from "react";
import api from "api/api";
import { AppContext } from "components/app";
import { downloadFromId } from "components/common/download";
import { FileListContext } from "components/file-list";
import { FileListToolbarShare } from "components/file-list-toolbar";
import "./file-list-toolbar.scss";

type FileListToolbarProps = {
  selectedItems: string[];
};

export function FileListToolbar(props: FileListToolbarProps) {
  const clientConfiguration = useContext<any>(AppContext).clientConfiguration;
  const box = useContext<any>(FileListContext).box;

  const downloadItems = function () {
    const payload = props.selectedItems.map(function (item) {
      return { itemId: item };
    });
    const downloadItemsCallback = function (res) {
      downloadFromId(res, clientConfiguration.csfrToken);
    };
    api.getDownloadId(payload, null, downloadItemsCallback);
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
        <div className="btn-group me-2" role="group" aria-label="Download">
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
