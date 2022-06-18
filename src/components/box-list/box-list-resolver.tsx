import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BoxListType } from "types";
import { boxListLoaded, getBoxList, init, initEmpty } from "store/box-list";
import { BoxList } from "components/box-list";
import { resolveBoxes } from "components/common/resolve-boxes";

export function BoxListResolver() {
  const dispatch = useDispatch();
  const boxList = useSelector(getBoxList);
  const loaded = useSelector(boxListLoaded);

  useEffect(
    function () {
      const successCallback = function (res: BoxListType[]) {
        dispatch(init(res));
      };
      const errorCallback = function () {
        dispatch(initEmpty());
      };
      if (!loaded) resolveBoxes().then(successCallback).catch(errorCallback);
    },
    [dispatch, loaded]
  );

  if (!loaded) {
    return <p>loading boxes...</p>;
  } else {
    return <BoxList boxes={boxList} />;
  }
}
