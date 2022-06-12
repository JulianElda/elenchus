import { ClientConfigUserTypes } from "types/client-config";

export const mock_clientconfig_admin = {
  csfrToken: "admintoken",
  id: "admin-id",
  lastLogin: 1654258585000,
  nick: "Jono Bangsat",
  userType: ClientConfigUserTypes.ADMIN,
};

export const mock_clientconfig_full = {
  csfrToken: "fulltoken",
  id: "full-id",
  lastLogin: 1654258585000,
  nick: "Jono Full",
  userType: ClientConfigUserTypes.FULL_LICENSE,
};

export const mock_clientconfig_guest = {
  csfrToken: "fulltoken",
  id: "full-id",
  lastLogin: 1654258585000,
  nick: "Jono Guest",
  userType: ClientConfigUserTypes.GUEST_LICENSE,
};
