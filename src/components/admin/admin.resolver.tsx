import { useContext } from "react";
import { AppContext, AppContextType } from "components/app";
import { Outlet } from "react-router-dom";

export function AdminResolver() {
  const clientConfiguration =
    useContext<AppContextType>(AppContext).clientConfiguration;

  if (clientConfiguration.userType !== "ADMIN") {
    return <>not an admin</>;
  } else {
    return <Outlet />;
  }
}
