import { IdgardBox } from "types";

type FileListToolbarShareProps = {
  boxId?: string;
  sharingConfig?: any;
};

export default function FileListToolbarShare(props: FileListToolbarShareProps) {
  if (!props.sharingConfig) {
    return (
      <div
        className="dropdown-menu file-list-toolbar-dropdown-form"
        aria-labelledby="share-dropdown">
        <p>...</p>
      </div>
    );
  }

  return (
    <div
      className="dropdown-menu file-list-toolbar-dropdown-form"
      aria-labelledby="share-dropdown">
      <p>{props.sharingConfig.shareLink}</p>
    </div>
  );
}
