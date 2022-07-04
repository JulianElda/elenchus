//import { useContext } from "react";
import { useSelector } from "react-redux";
import api from "api/api";
import { getClientConfig } from "store/client-config";
import { downloadFromId } from "components/common/download";
//import { FileListContext } from "components/file-list";
//import { FileListToolbarShare } from "components/file-list-toolbar";
import "./file-list-toolbar.scss";

type FileListToolbarProps = {
  selectedItems: string[];
};

export function FileListToolbar(props: FileListToolbarProps) {
  const clientConfiguration = useSelector(getClientConfig);
  //const box = useContext<any>(FileListContext).box;

  const downloadItems = function () {
    const payload = props.selectedItems.map(function (item) {
      return { itemId: item };
    });
    const downloadItemsCallback = function (res: string) {
      downloadFromId(res, clientConfiguration.csfrToken);
    };
    api.getDownloadId(payload, null, downloadItemsCallback);
  };

  return (
    <div className="my-4" role="toolbar" aria-label="Toolbar">
      {props.selectedItems.length > 0 && (
        <button
          type="button"
          className="inline-flex items-center px-2 py-1.5 mr-3 border border-transparent font-medium rounded shadow-sm text-white bg-gray-800 "
          aria-label="New folder"
          onClick={() => {
            downloadItems();
          }}>
          Download
        </button>
      )}

      <button
        type="button"
        className="inline-flex items-center px-2 py-1.5 mr-3 border border-transparent font-medium rounded shadow-sm text-white bg-gray-800 "
        id="share-dropdown"
        aria-label="Link">
        Link
      </button>
      {/*
      
      <FileListToolbarShare
        boxId={box?.id}
        sharingConfig={box?.sharingConfig}
      />
      */}

      <button
        type="button"
        className="inline-flex items-center px-2 py-1.5 border border-transparent font-medium rounded shadow-sm text-white bg-gray-800 "
        aria-label="Settings">
        Settings
      </button>
    </div>
  );
}
