import FileListItem from "./file-list-item";

export default function FileList(props) {

  const mapitemList = () => {
    return props.items.map((item: any) => {
      return (
        <FileListItem key={item.id} name={item.name} />
      )
    })
  }

  return (
    <div>
      <h3>file-list</h3>
      <ul className="list-group">
        {mapitemList()}
      </ul>
    </div>
  );
}