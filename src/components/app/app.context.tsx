import React from "react";
import { UserWrapper } from "idg-types";
import { ClientConfigType } from "types";

export type AppContextType = {
  clientConfiguration: ClientConfigType;
  user?: UserWrapper;
};
export const AppContext = React.createContext<AppContextType>({
  clientConfiguration: undefined!,
  user: undefined!,
});
