import React from "react";
import { ClientConfiguration, UserWrapper } from "idg-types";

export type AppContextType = {
  clientConfiguration: ClientConfiguration;
  user: UserWrapper;
};
export const AppContext = React.createContext({});
