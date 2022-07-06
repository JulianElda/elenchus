//import { useContext } from "react";
//import { FileListContext } from "components/file-list";
//import { FileListToolbarShare } from "components/file-list-toolbar";
import "./file-list-toolbar.scss";

type FileListToolbarProps = {
  selectedItems: string[];
};

export function FileListToolbar(props: FileListToolbarProps) {
  const downloadItems = function () {
    console.log("downloadItems");
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
