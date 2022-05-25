import { Entry } from "@types";
import FileListItem from "./file-list-item";
import { fileListSorterFunction } from "./file-list-sorter";

type FileListProp = {
  items: Entry[];
};

export default function FileList(props: FileListProp) {

  const mapitemList = () => {
    return props.items
      .sort(fileListSorterFunction())
      .map((item: any) => {
        return (
          <FileListItem key={item.id}
            id={item.id}
            type={item.type}
            name={item.name} />
        )
      });
  }

  return (
    <div>
      <ul className="list-group">
        {mapitemList()}
      </ul>
    </div>
  );
}