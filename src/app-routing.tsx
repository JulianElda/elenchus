import { Navigate, Routes, Route } from "react-router-dom";

import AppResolver from "components/app/app-resolver";
import AdminRouting from "components/admin/admin.routing";
import BoxListResolver from "components/box-list/box-list-resolver";
import FileListResolver from "components/file-list/file-list-resolver";
import Login from "components/login/login";

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
