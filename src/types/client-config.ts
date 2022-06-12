export enum ClientConfigUserTypes {
  ADMIN = "ADMIN",
  FULL_LICENSE = "FULL_LICENSE",
  BASIC_LICENSE = "BASIC_LICENSE",
  GUEST_LICENSE = "GUEST_LICENSE",
  ANONYMOUS = "ANONYMOUS",
}
export type ClientConfigType = {
  csfrToken: string;
  id: string;
  lastLogin: number;
  nick: string;
  userType: ClientConfigUserTypes;
};
