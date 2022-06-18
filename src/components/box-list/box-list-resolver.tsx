import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BoxListType } from "types";
import { boxListLoaded, getBoxList, loadBoxes } from "store/box-list";
import { BoxList } from "components/box-list";

export function BoxListResolver() {
  const dispatch = useDispatch();
  const boxList: BoxListType[] = useSelector(getBoxList);
  const loaded: boolean = useSelector(boxListLoaded);

  useEffect(
    function () {
      // TODO: correct type
      // @ts-ignore
      dispatch(loadBoxes());
    },
    [dispatch]
  );

  if (!loaded) {
    return <p>loading boxes...</p>;
  } else {
    return <BoxList boxes={boxList} />;
  }
}
