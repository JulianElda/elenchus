import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ClientConfigUserTypes } from "types";
import { getClientConfig } from "store/client-config";

export function AdminResolver() {
  const clientConfiguration = useSelector(getClientConfig);

  if (clientConfiguration.userType !== ClientConfigUserTypes.ADMIN) {
    return <p>not an admin</p>;
  } else {
    return (
      <React.Suspense fallback={<></>}>
        <Outlet />
      </React.Suspense>
    );
  }
}
