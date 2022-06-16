import { useEffect, useState } from "react";
import api from "api/api";

import { ClientConfigType } from "types";
import { AppUserResolver } from "components/app";

export function AppResolver() {
  const [clientConfiguration, setClientConfiguration] =
    useState<ClientConfigType>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const successCallback = async (res: ClientConfigType) => {
      setClientConfiguration(res);
      setLoading(false);
    };
    api.getClientConfiguration(successCallback);
  }, []);

  if (loading) {
    return <p>loading app...</p>;
  } else {
    return <AppUserResolver clientConfiguration={clientConfiguration!} />;
  }
}
