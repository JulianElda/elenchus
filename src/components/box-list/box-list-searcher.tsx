export default function BoxListSearcher(props) {

  const { onChangeSearch } = props;

  const onChangeText = (query: string) => {
    onChangeSearch(query);
  }

  return (
    <input type="text" className="form-control" id="box-list-searcher"
      onChange={e => onChangeText(e.target.value)}/>
  );
}

export function boxListSearcherFunction(query) {
  return function(box) {
    let searchable = box.name + "" + box.description;
    return searchable.toLowerCase().indexOf(query.toLowerCase()) >= 0;
  }
}