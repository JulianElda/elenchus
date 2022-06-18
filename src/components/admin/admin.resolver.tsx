import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { getClientConfig } from "store/client-config";

export function AdminResolver() {
  const clientConfiguration = useSelector(getClientConfig);

  if (clientConfiguration.userType !== "ADMIN") {
    return <p>not an admin</p>;
  } else {
    return <Outlet />;
  }
}
