import { useMemo } from "react";
import { Outlet } from "react-router-dom";

import { AppContext, AppContextType } from "./app.context";
import AppToolbar from "components/app-toolbar";
import "./app.scss";

export default function App(props) {
  console.log("APP")
  const appContextValue: AppContextType = useMemo(
    () => ({
      clientConfiguration: props.clientConfiguration,
      user: props.user,
    }),
    [props.clientConfiguration, props.user]
  );

  return (
    <AppContext.Provider value={appContextValue}>
      <AppToolbar nick={props.clientConfiguration.nick} />
      <main className="app-container container">
        <Outlet />
      </main>
    </AppContext.Provider>
  );
}
