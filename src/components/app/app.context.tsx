import React from "react";
import { UserType } from "types";
import { ClientConfigType } from "types";

export type AppContextType = {
  clientConfiguration: ClientConfigType;
  user?: UserType;
};
export const AppContext = React.createContext<AppContextType>({
  clientConfiguration: undefined!,
  user: undefined!,
});
