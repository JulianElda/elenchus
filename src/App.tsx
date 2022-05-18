import { useEffect, useState } from "react";
import axios from "api/axios";
import { Routes, Route, Outlet } from "react-router-dom";

import BoxList from "./components/box-list/box-list";
import FileList from "./components/file-list/file-list";
import Login from "./components/login/login";

import './App.css';

export function App() {

  const [clientConfiguration, setClientConfiguration] = useState<any>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);

  const loadClientConfiguration = () => {
    console.log("App.loadClientConfiguration()")
    axios.get("/uiapi/AccountsAPI/v1/rest/configuration")
    .then((res) => {
      setClientConfiguration(res.data);
      if (res.data.userType === "ADMIN" ||
          res.data.userType === "FULL_LICENSE")
        loadUser(res.data.id)
    })
    .catch((res) => {
    })
  }

  const loadUser = (userId) => {
    console.log("App.loadUser()")
    axios.get("/uiapi/UserManagementAPI/v1/rest/users/" + userId)
    .then((res) => {
      setCurrentUser(res.data);
    })
    .catch((res) => {
    })
  }

  useEffect(() => {
    loadClientConfiguration()
  }, [])

  if (!clientConfiguration || !currentUser) {
    return (
      <>
        <div className="app-container container">
          <p>loading app...</p>
        </div>
      </>
    );
  }

  return (
    <>
    <div className="app-container container">
      <h2>App</h2>
      <Outlet />
    </div>
    </>
  );
}

export function AppRouting() {
  return(
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="box" element={<BoxList />} />
        <Route path="box/:boxId" element={<FileList />}/>
      </Route>
    </Routes>
  )
}