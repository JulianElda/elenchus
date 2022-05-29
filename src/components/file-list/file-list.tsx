import { Entry, IdgardBox } from "types";

import NodeListItem from "components/node-list/node-list";

type FileListProp = {
  items: Entry[];
  box: IdgardBox;
};

export default function FileList(props: FileListProp) {
  return (
    <div>
      <p>{props.box?.role}</p>
      <NodeListItem items={props.items} />
    </div>
  );
}
