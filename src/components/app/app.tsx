import { Outlet } from "react-router-dom";

import "./app.scss";

import AppToolbar from "components/app-toolbar";

export default function App(props) {
  return (
    <>
      <AppToolbar nick={props.clientConfiguration.nick} />
      <main className="app-container container">
        <Outlet context={[props.clientConfiguration]} />
      </main>
    </>
  );
}
