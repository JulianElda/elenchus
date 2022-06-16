import { lazy } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

const AppResolver = lazy(() => import("components/app"));
const AdminRouting = lazy(() => import("components/admin"));
const BoxListResolver = lazy(() => import("components/box-list"));
const FileListResolver = lazy(() => import("components/file-list"));
const Login = lazy(() => import("components/login"));

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
