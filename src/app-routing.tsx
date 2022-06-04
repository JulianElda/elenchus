import { Navigate, Routes, Route } from "react-router-dom";

import AppResolver from "components/app/app-resolver";

import AdminRouting from "components/admin/admin.routing";
import BoxListResolver from "components/box-list/box-list-resolver";
import FileListResolver from "components/file-list/file-list-resolver";
import Login from "components/login/login";

// TODO: stuff ran twice when lazy loaded
/**
import { lazy } from "react";
const AdminRouting = lazy(() => import("components/admin/admin.routing"));
const BoxListResolver = lazy(
  () => import("components/box-list/box-list-resolver")
);
const FileListResolver = lazy(
  () => import("components/file-list/file-list-resolver")
);
const Login = lazy(() => import("components/login/login"));
*/

export default function AppRouting() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="" element={<Navigate to="/box" />} />
      <Route path="/" element={<AppResolver />}>
        <Route path="box" element={<BoxListResolver />} />
        <Route path="box/:boxId" element={<FileListResolver />} />
        <Route path="admin/*" element={<AdminRouting />} />
      </Route>
    </Routes>
  );
}
