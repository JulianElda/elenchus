import { useEffect, useState } from "react";
import { getClientConfiguration } from "api/api";
import { ClientConfiguration } from "types";
import { AppUserResolver } from "./app-user-resolver";

export default function AppResolver() {
  const [clientConfiguration, setClientConfiguration] =
    useState<ClientConfiguration>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const successCallback = async (res) => {
      setClientConfiguration(res);
      setLoading(false);
    };
    getClientConfiguration(successCallback);
  }, []);

  if (loading === true) {
    return (
      <div className="app-container container">
        <p>loading app...</p>
      </div>
    );
  } else {
    return <AppUserResolver clientConfiguration={clientConfiguration} />;
  }
}
