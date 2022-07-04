import { Outlet } from "react-router-dom";

import { AppToolbar } from "components/app-toolbar";
import "./app.scss";

type AppProps = {
  clientConfiguration: any;
  user: any;
};

export function App(props: AppProps) {
  return (
    <div>
      <AppToolbar nick={props.clientConfiguration.nick} />
      <main className="container mx-auto pt-12 mb-12">
        <Outlet />
      </main>
    </div>
  );
}
