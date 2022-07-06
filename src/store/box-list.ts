import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { file_api } from "api/api-faker";
import { BoxListResponseType, BoxListType } from "types";

type boxListInitialStateType = {
  data: BoxListType[];
  loaded: boolean;
};

type boxListPayloadType = {
  payload: BoxListType[];
  type: string;
};

const resolveBoxes = function () {
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
      file_api.paginateBox(limit, start, successCallback, errorCallback);
    };

    loadBoxes(index);
  });
};

const initialState: boxListInitialStateType = {
  data: [],
  loaded: false,
};

export const loadBoxes = createAsyncThunk("boxList/loadBoxes", async () => {
  const response = await resolveBoxes();
  return response;
});

export const boxListSlice = createSlice({
  name: "boxList",
  initialState: initialState,
  reducers: {
    init: (state, action: boxListPayloadType) => {
      return {
        data: state.data.concat(action.payload),
        loaded: true,
      };
    },
    initEmpty: () => {
      return {
        data: [],
        loaded: true,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(loadBoxes.fulfilled, (state, action) => {
      return {
        data: state.data.concat(action.payload),
        loaded: true,
      };
    });
  },
});

export const { init, initEmpty } = boxListSlice.actions;

export const getBoxList = function (state) {
  return state.boxList.data;
};

export const boxListLoaded = function (state) {
  return state.boxList.loaded;
};

export default boxListSlice.reducer;
