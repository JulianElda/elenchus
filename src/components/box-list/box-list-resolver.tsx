import { useEffect, useState } from "react";
import { BoxListType } from "types";
import { BoxList } from "components/box-list";
import { resolveBoxes } from "components/common/resolve-boxes";

export function BoxListResolver() {
  const [boxList, setBoxList] = useState<BoxListType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(function () {
    const successCallback = function (res: BoxListType[]) {
      setBoxList(res);
      setLoading(false);
    };
    const errorCallback = function () {
      setLoading(false);
    };
    resolveBoxes().then(successCallback).catch(errorCallback);
  }, []);

  if (loading) {
    return <p>loading boxes...</p>;
  } else {
    return <BoxList boxes={boxList} />;
  }
}
