import { useEffect, useState } from "react";
import axios from "api/axios";
import { Navigate, Routes, Route, Outlet } from "react-router-dom";

import BoxList from "./components/box-list/box-list";
import FileList from "./components/file-list/file-list";
import Login from "./components/login/login";

import './App.css';

export function App() {

  const [clientConfiguration, setClientConfiguration] = useState<any>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [nick, setNick] = useState<string>("")

  useEffect(() => {
    if (clientConfiguration &&
        (clientConfiguration.userType === "ADMIN" ||
        clientConfiguration.userType === "FULL_LICENSE"))
    axios.get("/uiapi/UserManagementAPI/v1/rest/users/" + clientConfiguration.id)
    .then((res) => {
      setCurrentUser(res.data);
    })
    .catch((res) => {
    })
  }, [clientConfiguration])

  useEffect(() => {
    axios.get("/uiapi/AccountsAPI/v1/rest/configuration")
    .then((res) => {
      setClientConfiguration(res.data);
      setNick(res.data.nick);
    })
    .catch((res) => {
    })
  }, [])

  if (!clientConfiguration || !currentUser) {
    return (
      <div className="app-container container">
        <p>loading app...</p>
      </div>
    );
  }

  return (
    <div className="app-container container">
      <h2>Welcome {nick}</h2>
      <Outlet />
    </div>
  );
}

export function AppRouting() {
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