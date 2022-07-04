import React from "react";
import { BoxListType } from "types";
import {
  BoxListItem,
  BoxListNoboxes,
  boxListSorterFunction,
} from "components/box-list";
//import { BoxListToolbar } from "components/box-list-toolbar";

type BoxListProp = {
  boxes: BoxListType[];
};

export function BoxList(props: BoxListProp) {
  const mapBoxList = function () {
    return (
      props.boxes
        .slice()
        //.filter(boxListSearcherFunction(boxListSearch))
        .sort(boxListSorterFunction("name"))
        .map((box: BoxListType) => {
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

  const getBoxListContent = function () {
    return <ul className="divide-y shadow">{mapBoxList()}</ul>;
  };

  if (props.boxes.length === 0) {
    return <BoxListNoboxes />;
  } else {
    return (
      <React.StrictMode>
        <nav className="flex my-4" aria-label="breadcrumb">
          <ol className="flex items-center space-x-4">
            <li className="cursor-pointer font-mono">
              <span className="text-gray-800">/ home</span>
            </li>
          </ol>
        </nav>
        {getBoxListContent()}
      </React.StrictMode>
    );
  }
}
