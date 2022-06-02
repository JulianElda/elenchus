import { boxListSorterFunction } from "./box-list-sorter";
//import { boxListSearcherFunction } from "./box-list-searcher";
import BoxListItem from "./box-list-item";
import BoxListNoboxes from "./box-list-noboxes";
import BoxListNoresult from "./box-list-noresult";
import BoxListToolbar from "components/box-list-toolbar";
import Finder from "components/finder/finder";
import { IdgardBox } from "types";

type BoxListProp = {
  boxes: IdgardBox[];
};

export default function BoxList(props: BoxListProp) {
  const mapBoxList = function () {
    return (
      props.boxes
        //.filter(boxListSearcherFunction(boxListSearch))
        .sort(boxListSorterFunction("name"))
        .map((box: IdgardBox) => {
          return (
            <BoxListItem
              key={box.id}
              id={box.id}
              name={box.name}
              type={box.type}
            />
          );
        })
    );
  };

  /*
  const onChangeSort = useCallback((cat: string) => {
    setBoxListSort(cat);
  }, []);

  const onChangeSearch = useCallback((query: string) => {
    setBoxListSearch(query);
  }, []);
  */

  const getBoxListContent = function () {
    const list = mapBoxList();
    if (list.length === 0) return <BoxListNoresult />;
    else return <ul className="list-group">{list}</ul>;
  };

  if (props.boxes.length === 0) {
    return <BoxListNoboxes />;
  } else {
    return (
      <>
        <BoxListToolbar />
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item font-monospace">
              <span>/ home</span>
            </li>
          </ol>
        </nav>
        {/**
          <div className="row mb-2">
            <div className="col-md-6">
              <BoxListSearcher onChangeSearch={onChangeSearch} />
            </div>
            <div className="col-md-6">
              <BoxListSortSelect onChangeSort={onChangeSort} />
            </div>
          </div>
           */}

        {getBoxListContent()}
        <Finder boxes={props.boxes} />
      </>
    );
  }
}
