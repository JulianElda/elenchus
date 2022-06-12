import { useEffect, useState } from "react";
import { IdgardBox } from "types";
import BoxList from "./box-list";

import { resolveBoxes } from "components/common/resolve-boxes";

export default function BoxListResolver() {
  const [boxList, setBoxList] = useState<Array<IdgardBox>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(function () {
    const successCallback = function (res) {
      setBoxList(res);
      setLoading(false);
    };
    const errorCallback = function (res) {
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
