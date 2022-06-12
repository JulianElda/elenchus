/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SimpleUserInfo = {
  csfrToken?: string;
  lastLogin?: number;
  nick?: string;
  userType?: SimpleUserInfo.userType;
};

export namespace SimpleUserInfo {
  export enum userType {
    ADMIN = "ADMIN",
    FULL_LICENSE = "FULL_LICENSE",
    BASIC_LICENSE = "BASIC_LICENSE",
    GUEST_LICENSE = "GUEST_LICENSE",
    ANONYMOUS = "ANONYMOUS",
  }
}
