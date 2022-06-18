import { createSlice } from "@reduxjs/toolkit";
import { BoxListType } from "types";

type boxListInitialStateType = {
  data: BoxListType[];
  loaded: boolean;
};

type boxListPayloadType = {
  payload: BoxListType[];
  type: string;
};

const initialState: boxListInitialStateType = {
  data: [],
  loaded: false,
};

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
});

export const { init, initEmpty } = boxListSlice.actions;

export const getBoxList = function (state) {
  return state.boxList.data;
};

export const boxListLoaded = function (state) {
  return state.boxList.loaded;
};

export default boxListSlice.reducer;
