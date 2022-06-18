import { configureStore } from "@reduxjs/toolkit";
import boxListReducer from "./box-list";
import clientConfigReducer from "./client-config";
import currentUserReducer from "./current-user";
import userListReducer from "./user-list";

export default configureStore({
  reducer: {
    boxList: boxListReducer,
    clientConfig: clientConfigReducer,
    currentUser: currentUserReducer,
    userList: userListReducer,
  },
});
