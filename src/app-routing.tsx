import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import AppResolver from "components/app/app-resolver";
import BoxListResolver from "components/box-list/box-list-resolver";
import FileListResolver from "components/file-list/file-list-resolver";
import FileListRootResolver from "components/file-list/file-list-root-resolver";
import UserListResolver from "components/user-list/user-list-resolver";
import UserViewResolver from "components/user-view/user-view-resolver";

import Login from "components/login/login";

export default function AppRouting() {
  return(
    <Routes>
      <Route path="" element={<Navigate to="/box" />}/>
      <Route path="/" element={<AppResolver />}>
        <Route path="box" element={<BoxListResolver />} />
        <Route path="box/:boxId" element={<FileListRootResolver />}/>
        <Route path="box/:boxId/:folderId" element={<FileListResolver />}/>
        <Route path="user" element={<UserListResolver />} />
        <Route path="user/:userId" element={<UserViewResolver />} />
      </Route>
      <Route path="login" element={<Login />}/>
    </Routes>
  );
}