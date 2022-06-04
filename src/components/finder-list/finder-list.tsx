import { finderListSorterFunction } from "./finder-list-sorter";
import FinderListItem from "./finder-list-item";

type FinderListProps = {
  items: any[];
};

export default function FinderList(props: FinderListProps) {
  const mapItemList = function () {
    return props.items.sort(finderListSorterFunction()).map(function (item) {
      return (
        <FinderListItem
          key={item.id}
          id={item.id}
          type={item.type}
          name={item.name}
          parent={item.parent}
          boxId={item.boxId}
          path={item.path}
        />
      );
    });
  };

  return <ul className="list-group">{mapItemList()}</ul>;
}
