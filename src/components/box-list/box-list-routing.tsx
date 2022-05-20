import { Navigate, Routes, Route } from "react-router-dom";
import BoxListResolver from "@components/box-list/box-list-resolver";
import FileListResolver from "@components/file-list/file-list-resolver";
import FileListRootResolver from "@components/file-list/file-list-root-resolver";

export default function BoxListRouting() {
  return(
    <Routes>
      <Route path="/" element={<BoxListResolver />} >
      </Route>
    </Routes>
  );
}