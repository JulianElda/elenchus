import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "types";

type userListInitialStateType = {
  data: UserType[];
  loaded: boolean;
};

type userListPayloadType = {
  payload: UserType[];
  type: string;
};

const initialState: userListInitialStateType = {
  data: [],
  loaded: false,
};

export const userListSlice = createSlice({
  name: "userList",
  initialState: initialState,
  reducers: {
    init: (state, action: userListPayloadType) => {
      return {
        data: state.data.concat(action.payload),
        loaded: true,
      };
    },
  },
});

export const { init } = userListSlice.actions;

export const getUserList = function (state) {
  return state.userList.data;
};

export const userListLoaded = function (state) {
  return state.userList.loaded;
};

export default userListSlice.reducer;
