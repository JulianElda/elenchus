import { lazy } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import AppResolver from "components/app/app-resolver";
import Login from "components/login/login";

const BoxListResolver = lazy(() => import("components/box-list/box-list-resolver"));
const FileListResolver = lazy(() => import("components/file-list/file-list-resolver"));
const FileListRootResolver = lazy(() => import("components/file-list/file-list-root-resolver"));
const UserListResolver = lazy(() => import("components/user-list/user-list-resolver"));
const UserViewResolver = lazy(() => import("components/user-view/user-view-resolver"));

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