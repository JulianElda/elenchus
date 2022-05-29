import FileListToolbarShare from "./file-list-toolbar-share";
import "./file-list-toolbar.scss";

type FileListToolbarProps = {
  box: any;
};

export default function FileListToolbar(props: FileListToolbarProps) {
  return (
    <div
      className="btn-toolbar mb-2"
      role="toolbar"
      aria-label="Toolbar with button groups">
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
      <div className="btn-group me-2" role="group" aria-label="Link">
        <button
          type="button"
          className="btn btn-outline-dark dropdown-toggle"
          data-bs-toggle="dropdown"
          id="share-dropdown">
          Link
        </button>
        <FileListToolbarShare
          boxId={props.box?.id}
          sharingConfig={props.box?.sharingConfig}
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
