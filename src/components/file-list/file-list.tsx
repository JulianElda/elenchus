import { Entry, IdgardBox } from "types";
import FileListToolbar from "components/file-list-toolbar/file-list-toolbar";
import NodeListItem from "components/node-list/node-list";

type FileListProp = {
  items: Entry[];
  box: IdgardBox;
  boxId?: string;
};

export default function FileList(props: FileListProp) {
  return (
    <div>
      <FileListToolbar box={props.box} />
      <NodeListItem items={props.items} />
    </div>
  );
}
