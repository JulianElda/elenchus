import api from "api/api";
import { BoxListResponseType, BoxListType } from "types";

export const resolveBoxes = function () {
  const limit = 50;
  let tmp: BoxListType[] = [];
  let index = 0;

  return new Promise<BoxListType[]>((resolve: Function, reject: Function) => {
    const successCallback = function (res: BoxListResponseType) {
      tmp = tmp.concat(res.listBoxes);
      if (res.hasNext) {
        index += limit;
        loadBoxes(index);
      } else {
        resolve(tmp);
      }
    };
    const errorCallback = function (res) {
      reject(res);
    };

    const loadBoxes = function (start: number) {
      api.paginateBox(limit, start, successCallback, errorCallback);
    };

    loadBoxes(index);
  });
};
