import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "api/api-faker";
import { ClientConfigType } from "types";
import { clientConfigLoaded, getClientConfig, init } from "store/client-config";
import { AppUserResolver } from "components/app";

export function AppResolver() {
  const dispatch = useDispatch();
  const clientConfiguration: ClientConfigType = useSelector(getClientConfig);
  const loaded: boolean = useSelector(clientConfigLoaded);

  useEffect(() => {
    const successCallback = async (res: ClientConfigType) => {
      dispatch(init(res));
    };
    api.getClientConfiguration(undefined, successCallback)
  }, [dispatch]);

  if (!loaded) {
    return <p>loading app...</p>;
  } else {
    return <AppUserResolver clientConfiguration={clientConfiguration!} />;
  }
}
