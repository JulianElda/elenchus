import { useContext } from "react";
import { AppContext } from "components/app";
import { Outlet } from "react-router-dom";

export function AdminResolver(props: any) {
  const clientConfiguration = useContext<any>(AppContext).clientConfiguration;

  if (clientConfiguration.userType !== "ADMIN") {
    return <>not an admin</>;
  } else {
    return <Outlet />;
  }
}
