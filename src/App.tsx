import { useEffect, useState } from "react";
import axios from "api/axios";
import { Outlet} from "react-router-dom";

import './App.css';

export default function App() {

  const [clientConfiguration, setClientConfiguration] = useState<any>({});
  const [currentUser, setCurrentUser] = useState<any>({});

  const loadClientConfiguration = () => {
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

  return (
    <>
    <div className="app-container container">
      <h2>App</h2>
      <Outlet />
    </div>
    </>
  );
}