import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import AppResolver from "@components/app/app-resolver";
import BoxListResolver from "@components/box-list/box-list-resolver";
import FileListResolver from "@components/file-list/file-list-resolver";
import FileListRootResolver from "@components/file-list/file-list-root-resolver";

import Login from "@components/login/login";

export default function AppRouting() {
  return(
    <Routes>
      <Route path="" element={<Navigate to="/box" />}/>
      <Route path="/" element={<AppResolver />}>
        <Route path="box" element={<BoxListResolver />} />
        <Route path="box/:boxId" element={<FileListRootResolver />}/>
        <Route path="box/:boxId/:folderId" element={<FileListResolver />}/>
      </Route>
      <Route path="login" element={<Login />}/>
    </Routes>
  );
}