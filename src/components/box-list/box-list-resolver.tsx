import { useEffect, useRef, useState } from "react";
import axios from "api/axios";

import { IdgardBox } from "types";
import BoxList from "./box-list";

export default function BoxListResolver() {
  const [boxList, setBoxList] = useState<Array<IdgardBox>>([]);
  const [paginating, setPaginating] = useState<boolean>(true);

  const limit = 50;
  let tmp = useRef<IdgardBox[]>([]);

  useEffect(() => {
    const loadBoxes = (start: number) => {
      axios
        .get(
          "/uiapi/BoxAPI/v1/rest/partial_boxes?nbBoxes=" +
            (limit - 1) +
            "&offset=" +
            start
        )
        .then((res) => {
          tmp.current = tmp.current.concat(res.data.listBoxes);
          if (res.data.hasNext) {
            loadBoxes(start + limit);
          } else {
            setBoxList(tmp.current);
            setPaginating(false);
          }
        })
        .catch((res) => {});
    };
    loadBoxes(0);
  }, []);

  if (paginating) {
    return <p>loading boxes...</p>;
  } else {
    return <BoxList boxes={boxList} />;
  }
}
