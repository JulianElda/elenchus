import React from "react";
import { UserWrapper } from "idg-types";
import { ClientConfigType } from "types/client-config";

export type AppContextType = {
  clientConfiguration: ClientConfigType;
  user: UserWrapper;
};
export const AppContext = React.createContext({});
