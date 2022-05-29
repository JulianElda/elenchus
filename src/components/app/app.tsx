import { Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";

import "./app.scss";

import AppToolbar from "components/app-toolbar";
import Breadcrumb from "components/breadcrumb";

export default function App(props) {
  return (
    <RecoilRoot>
      <AppToolbar nick={props.clientConfiguration.nick} />
      <main className="app-container container">
        <Breadcrumb />
        <Outlet context={[props.clientConfiguration]} />
      </main>
    </RecoilRoot>
  );
}
