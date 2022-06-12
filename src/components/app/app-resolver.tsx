import { useEffect, useState } from "react";
import api from "api/api";

import { ClientConfigType } from "types/client-config";
import { AppUserResolver } from "./app-user-resolver";

export default function AppResolver() {
  const [clientConfiguration, setClientConfiguration] =
    useState<ClientConfigType>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const successCallback = async (res) => {
      setClientConfiguration(res);
      setLoading(false);
    };
    api.getClientConfiguration(successCallback);
  }, []);

  if (loading) {
    return <p>loading app...</p>;
  } else {
    return <AppUserResolver clientConfiguration={clientConfiguration} />;
  }
}
