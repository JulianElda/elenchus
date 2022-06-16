type FileListToolbarShareProps = {
  boxId?: string;
  sharingConfig?: any;
};

export function FileListToolbarShare(props: FileListToolbarShareProps) {
  const getFormContent = function () {
    if (props.sharingConfig) {
      return <p>{props.sharingConfig.shareLink}</p>;
    } else return <p>...</p>;
  };

  return (
    <div
      className="dropdown-menu file-list-toolbar-dropdown-form"
      aria-labelledby="share-dropdown">
      {getFormContent()}
    </div>
  );
}
