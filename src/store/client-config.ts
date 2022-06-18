import { createSlice } from "@reduxjs/toolkit";
import { ClientConfigType } from "types";

type initialStateType = {
  data: ClientConfigType;
  loaded: boolean;
};

type clientConfigPayloadType = {
  payload: ClientConfigType;
  type: string;
};

const initialState: initialStateType = {
  data: {} as ClientConfigType,
  loaded: false,
};

export const clientConfigSlice = createSlice({
  name: "clientConfig",
  initialState: initialState,
  reducers: {
    init: (state, action: clientConfigPayloadType) => {
      return {
        data: { ...action.payload },
        loaded: true,
      };
    },
  },
});

export const { init } = clientConfigSlice.actions;

export const getClientConfig = function (state) {
  return state.clientConfig.data;
};

export const clientConfigLoaded = function (state) {
  return state.clientConfig.loaded;
};

export default clientConfigSlice.reducer;
