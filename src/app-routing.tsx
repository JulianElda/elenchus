import { lazy } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import AppResolver from "components/app/app-resolver";

const AdminRouting = lazy(() => import("components/admin/admin.routing"));
const BoxListResolver = lazy(
  () => import("components/box-list/box-list-resolver")
);
const FileListResolver = lazy(
  () => import("components/file-list/file-list-resolver")
);
const FileListRootResolver = lazy(
  () => import("components/file-list/file-list-root-resolver")
);
const Login = lazy(() => import("components/login/login"));

export default function AppRouting() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="" element={<Navigate to="/box" />} />
      <Route path="/" element={<AppResolver />}>
        <Route path="box" element={<BoxListResolver />} />
        <Route path="box/:boxId" element={<FileListRootResolver />} />
        <Route path="box/:boxId/:folderId" element={<FileListResolver />} />
        <Route path="admin" element={<AdminRouting />} />
      </Route>
    </Routes>
  );
}
