export enum ClientConfigUserTypes {
  ADMIN = "ADMIN",
  FULL_LICENSE = "FULL_LICENSE",
  GUEST_LICENSE = "GUEST_LICENSE",
}
export type ClientConfigType = {
  csfrToken: string;
  id: string;
  lastLogin: number;
  nick: string;
  userType: ClientConfigUserTypes;
};
