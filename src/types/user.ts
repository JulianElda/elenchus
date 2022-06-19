import { BoxBasePoliciesType } from "./enterprise-box";

export type UserType = {
  id: string;
  userInfos: UserInfos;
  userPermissions: UserPermissions;
  userCreation: UserCreation;
  statisticsUserBox: UserBoxStatistics;
  statisticsUserStorage: UserStorageStatistics;
  statisticsUserInfos: UserInfoStatistics;
};

export type UserInfos = {
  dailyNotification: boolean;
  hourlyNotification: boolean;
  admin: boolean;
  email: string;
  name: string;
  type: UserInfoType;
  personalId: string;
  status: UserInfoStatus;
};

export type UserPermissions = {
  accountCreationPolicy: AccountCreationPolicy;
  adminPermissions: AccountVisibility;
  boxBasePolicies: BoxBasePoliciesType;
  tempBoxPolicy: TempBoxesPolicy;
  visibility: UserPermissionsVisibility;
};

export type UserCreation = {
  note: string;
  phoneNumber: string;
  expirationDate?: string;
  loginValidation?: LoginValidation;
  registrationDate?: string;
  registrationLink?: string;
  registrationValidation?: RegistrationValidation;
};

export type UserInfoStatistics = {
  creationDate: string;
  creatorUUID: string;
  editable: boolean;
  lastChanged: string;
  lastLogin: string;
};

export type UserBoxStatistics = {
  countDatarooms: number;
  countGuests: number;
};

export type UserStorageStatistics = {
  accountUsed: number;
  bookedAccountStorage: number;
  invited: number;
  isAccountCapped: boolean;
  maxFileSize: number;
  maxUserStorage: number;
  own: number;
};

export type LoginValidation = {
  forced: boolean;
  type: LoginValidationTypeOrNone;
  value: string;
};

export type RegistrationValidation = {
  type: RegistrationValidationType;
  value: string;
};

export type AccountCreationPolicy = {
  canCreateRegularGuest?: boolean;
  canCreateTempGuest?: boolean;
};

export type AccountVisibility = Array<
  "TECHNICAL_ADMIN" | "BILLING_ADMIN" | "ROOM_ASSISTANT"
>;

export type TempBoxesPolicy = {
  lifeTime: number;
};

export enum LoginValidationTypeOrNone {
  NONE = "NONE",
  PASSCODE = "PASSCODE",
  LOGINCARD = "LOGINCARD",
  DUO = "DUO",
  TOTP = "TOTP",
}

export enum RegistrationValidationType {
  NONE = "NONE",
  PASSCODE = "PASSCODE",
  LOGINCARD = "LOGINCARD",
}

export enum UserInfoStatus {
  INVALID = "INVALID",
  INITIATED = "INITIATED",
  ACTIVE = "ACTIVE",
  DISABLED = "DISABLED",
}

export enum UserInfoType {
  FULL_LICENSE = "FULL_LICENSE",
  GUEST_LICENSE = "GUEST_LICENSE",
  BASIC_LICENSE = "BASIC_LICENSE",
}

export enum UserPermissionsVisibility {
  NONE = "NONE",
  OWN_INVITED = "OWN_INVITED",
  OTHER_FULL_LICENSES = "OTHER_FULL_LICENSES",
  ALL = "ALL",
}
