import { useEffect, useState } from "react";
import axios from "api/axios";
import { ClientConfiguration, UserWrapper } from "types";
import App from "./app";

export default function AppResolver() {
  const [clientConfiguration, setClientConfiguration] =
    useState<ClientConfiguration>();
  const [currentUser, setCurrentUser] = useState<UserWrapper>();

  useEffect(() => {
    if (
      clientConfiguration &&
      (clientConfiguration.userType === "ADMIN" ||
        clientConfiguration.userType === "FULL_LICENSE")
    )
      axios
        .get("/uiapi/UserManagementAPI/v1/rest/users/" + clientConfiguration.id)
        .then((res) => {
          setCurrentUser(res.data);
        })
        .catch((res) => {});
  }, [clientConfiguration]);

  useEffect(() => {
    axios
      .get("/uiapi/AccountsAPI/v1/rest/configuration")
      .then((res) => {
        setClientConfiguration(res.data);
      })
      .catch((res) => {});
  }, []);

  if (!clientConfiguration || !currentUser) {
    return (
      <div className="app-container container">
        <p>loading app...</p>
      </div>
    );
  } else {
    return <App clientConfiguration={clientConfiguration} user={currentUser} />;
  }
}
