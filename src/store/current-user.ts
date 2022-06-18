import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "types";

type initialStateType = {
  data: UserType;
  loaded: boolean;
};

type currentUserPayloadType = {
  payload: UserType;
  type: string;
};

const initialState: initialStateType = {
  data: {} as UserType,
  loaded: false,
};

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: initialState,
  reducers: {
    init: (state, action: currentUserPayloadType) => {
      return {
        data: { ...action.payload },
        loaded: true,
      };
    },
    initGuest: () => {
      return {
        data: {} as UserType,
        loaded: true,
      };
    },
  },
});

export const { init, initGuest } = currentUserSlice.actions;

export const getCurrentUser = function (state) {
  return state.currentUser.data;
};

export const currentUserLoaded = function (state) {
  return state.currentUser.loaded;
};

export default currentUserSlice.reducer;
