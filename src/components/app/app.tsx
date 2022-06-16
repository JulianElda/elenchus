import { useMemo } from "react";
import { Outlet } from "react-router-dom";

import { AppContext, AppContextType } from "components/app";
import { AppToolbar } from "components/app-toolbar";
import "./app.scss";

type AppProps = {
  clientConfiguration: any;
  user: any;
};

export function App(props: AppProps) {
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
