import { configureStore } from "@reduxjs/toolkit";
import clientConfigReducer from "./client-config";
import currentUserReducer from "./current-user";
import userListReducer from "./user-list";

export default configureStore({
  reducer: {
    clientConfig: clientConfigReducer,
    currentUser: currentUserReducer,
    userList: userListReducer,
  },
});
