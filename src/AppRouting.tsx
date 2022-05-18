import { Navigate, Routes, Route } from "react-router-dom";

import App from "./App";
import BoxList from "./components/box-list/box-list";
import FileList from "./components/file-list/file-list";
import Login from "./components/login/login";

export default function AppRouting() {
  return(
    <Routes>
      <Route path="" element={<Navigate to="/box" />}/>
      <Route path="/" element={<App />}>
        <Route path="box" element={<BoxList />} />
        <Route path="box/:boxId" element={<FileList />}/>
      </Route>
      <Route path="login" element={<Login />}/>
    </Routes>
  )
}