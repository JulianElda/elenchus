import { useEffect, useRef, useState } from "react";
import api from "api/api";
import { IdgardBox } from "types";
import BoxList from "./box-list";

export default function BoxListResolver() {
  const [boxList, setBoxList] = useState<Array<IdgardBox>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const limit = 50;
  let tmp = useRef<IdgardBox[]>([]);
  let index = useRef<number>(0);

  useEffect(() => {
    const paginateBoxCallback = function (res) {
      tmp.current = tmp.current.concat(res.listBoxes);
      if (res.hasNext) {
        index.current += limit;
        loadBoxes(index.current);
      } else {
        setBoxList(tmp.current);
        setLoading(false);
      }
    };
    const loadBoxes = function (start: number) {
      api.paginateBox(limit, start, paginateBoxCallback);
    };
    loadBoxes(index.current);
  }, []);

  if (loading) {
    return <p>loading boxes...</p>;
  } else {
    return <BoxList boxes={boxList} />;
  }
}
