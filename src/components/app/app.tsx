import { Outlet } from "react-router-dom";

import { AppToolbar } from "components/app-toolbar";
import "./app.scss";

type AppProps = {
  clientConfiguration: any;
  user: any;
};

export function App(props: AppProps) {
  return (
    <>
      <AppToolbar nick={props.clientConfiguration.nick} />
      <main className="app-container container">
        <Outlet />
      </main>
    </>
  );
}
