import FileListItem from "./file-list-item";
import { fileListSorterFunction } from "./file-list-sorter";

export default function FileList(props) {

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