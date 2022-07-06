import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { user_api } from "api/api-faker";
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

const resolveUsers = function () {
  const limit = 50;
  let tmp: UserType[] = [];
  let index: number = 0;

  return new Promise<UserType[]>((resolve: Function, reject: Function) => {
    const successCallback = function (res: UserType[]) {
      tmp = tmp.concat(res);
      if (res.length === limit) {
        index += limit;
        loadUsers(index);
      } else {
        resolve(tmp);
      }
    };

    const errorCallback = function (res) {
      reject(res);
    };

    const loadUsers = function (start: number) {
      user_api.paginateUser(limit, start, successCallback, errorCallback);
    };

    loadUsers(index);
  });
};

export const loadUsers = createAsyncThunk("userList/loadUsers", async () => {
  const response = await resolveUsers();
  return response;
});

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
  extraReducers(builder) {
    builder.addCase(loadUsers.fulfilled, (state, action) => {
      return {
        data: state.data.concat(action.payload),
        loaded: true,
      };
    });
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
