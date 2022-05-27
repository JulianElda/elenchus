import { Outlet } from "react-router-dom";

import "./app.scss";

import AppToolbar from "components/app-toolbar";
//import Breadcrumb from "components/breadcrumb";
import Logout from "components/logout";

export default function App(props) {
  const clientConfiguration = props.clientConfiguration;

  return (
    <>
      <AppToolbar nick={clientConfiguration.nick} />
      <Logout />
      <main className="app-container container">
        <Outlet />
      </main>
    </>
  );
}
