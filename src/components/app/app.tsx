import React from "react";
import { Outlet } from "react-router-dom";
import { AppToolbar } from "components/app-toolbar";

type AppProps = {
  clientConfiguration: any;
  user: any;
};

export function App(props: AppProps) {
  return (
    <div>
      <AppToolbar nick={props.clientConfiguration.nick} />
      <main className="container mx-auto pt-12 mb-12">
        <React.Suspense fallback={<></>}>
          <Outlet />
        </React.Suspense>
      </main>
    </div>
  );
}
