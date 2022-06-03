import { Outlet } from "react-router-dom";

import { AppContext, AppContextType} from "./app.context"
import AppToolbar from "components/app-toolbar";
import "./app.scss";

export default function App(props) {

  const appContextValue: AppContextType = {
    clientConfiguration: props.clientConfiguration,
    user: props.user
  }

  return (
    <AppContext.Provider value={appContextValue}>
      <AppToolbar nick={props.clientConfiguration.nick} />
      <main className="app-container container">
        <Outlet context={[props.clientConfiguration]} />
      </main>
    </AppContext.Provider>
  );
}
