import { faker } from "@faker-js/faker/locale/en";
import {
  AccountCreationPolicy,
  UserInfoStatistics,
  UserBoxStatistics,
  UserStorageStatistics,
  UserCreation,
  LoginValidation,
  LoginValidationTypes,
  RegistrationValidation,
  RegistrationValidationTypes,
  UserPermissionsVisibility,
  AdminTypes,
  UserType,
  UserInfos,
  UserPermissions,
  UserInfoStatus,
  UserInfoType,
} from "types/user";

import {
  generate_BoxBasePoliciesType,
  generate_TempBoxesPolicyType,
} from "./enterprise-box";

const generate_UserInfoStatus = function (): UserInfoStatus {
  let i = Math.ceil(Math.random() * 10);
  switch (i) {
    case 1:
      return UserInfoStatus.DISABLED;
    case 2:
      return UserInfoStatus.INITIATED;
    case 3:
      return UserInfoStatus.INVALID;
    default:
      return UserInfoStatus.ACTIVE;
  }
};

const generate_UserCreation = function (): UserCreation {
  let registered = Math.random() > 0.9;
  return {
    note: faker.commerce.productDescription(),
    phoneNumber: faker.phone.imei(),
    loginValidation: Math.random() > 0.75 ? generate_LoginValidation() : null,
    registrationDate: !registered
      ? faker.date.past().getTime().toString()
      : null,
    registrationLink: !registered ? faker.internet.url() : null,
    registrationValidation:
      !registered && Math.random() > 0.8
        ? generate_RegistrationValidation()
        : null,
  };
};

const generate_UserInfoStatistics = function (): UserInfoStatistics {
  return {
    creationDate: faker.date.past().getTime().toString(),
    creatorUUID: faker.database.mongodbObjectId(),
    editable: Math.random() > 0.5,
    lastChanged: faker.date.past().getTime().toString(),
    lastLogin: faker.date.past().getTime().toString(),
  };
};

const generate_UserBoxStatistics = function (): UserBoxStatistics {
  return {
    countDatarooms: Math.random() > 0.85 ? Math.ceil(Math.random() * 10) : 0,
    countGuests: Math.random() > 0.55 ? Math.ceil(Math.random() * 15) : 0,
  };
};

const generate_UserStorageStatistics = function (): UserStorageStatistics {
  return {
    accountUsed:
      Math.random() > 0.85
        ? Math.ceil(Math.random() * 1024 * 1024 * 1024 * 1024)
        : 0,
    bookedAccountStorage:
      Math.random() > 0.75
        ? Math.ceil(Math.random() * 1024 * 1024 * 1024 * 1024)
        : 0,
    invited:
      Math.random() > 0.65
        ? Math.ceil(Math.random() * 1024 * 1024 * 1024 * 1024)
        : 0,
    own:
      Math.random() > 0.5
        ? Math.ceil(Math.random() * 1024 * 1024 * 1024 * 1024)
        : 0,
    isAccountCapped: false,
    maxUserStorage: 1024 * 1024 * 1024 * 1024 * 1024,
    maxFileSize: 1024 * 1024 * 1024 * 1024 * 5,
  };
};

const generate_LoginValidationType = function (): LoginValidationTypes {
  let i = Math.ceil(Math.random() * 10);
  switch (i) {
    case 1:
      return LoginValidationTypes.PASSCODE;
    case 2:
      return LoginValidationTypes.LOGINCARD;
    case 3:
      return LoginValidationTypes.DUO;
    case 4:
      return LoginValidationTypes.TOTP;
    default:
      return LoginValidationTypes.NONE;
  }
};

const generate_RegistrationValidationType =
  function (): RegistrationValidationTypes {
    let i = Math.ceil(Math.random() * 6);
    switch (i) {
      case 1:
        return RegistrationValidationTypes.PASSCODE;
      case 2:
        return RegistrationValidationTypes.LOGINCARD;
      default:
        return RegistrationValidationTypes.NONE;
    }
  };

const generate_UserInfoType = function (): UserInfoType {
  let i = Math.ceil(Math.random() * 3);
  switch (i) {
    case 1:
      return UserInfoType.GUEST_LICENSE;
    default:
      return UserInfoType.FULL_LICENSE;
  }
};

const generate_UserPermissionsVisibility =
  function (): UserPermissionsVisibility {
    let i = Math.ceil(Math.random() * 5);
    switch (i) {
      case 1:
        return UserPermissionsVisibility.NONE;
      case 2:
        return UserPermissionsVisibility.OWN_INVITED;
      case 3:
        return UserPermissionsVisibility.OTHER_FULL_LICENSES;
      default:
        return UserPermissionsVisibility.ALL;
    }
  };

const generate_LoginValidation = function (): LoginValidation {
  return {
    forced: false,
    type: generate_LoginValidationType(),
  };
};

const generate_RegistrationValidation = function (): RegistrationValidation {
  return {
    type: generate_RegistrationValidationType(),
  };
};

const generate_AccountVisibility = function (): AdminTypes[] {
  let tmp: AdminTypes[] = [];
  if (Math.random() > 0.4) tmp.push(AdminTypes.TECHNICAL_ADMIN);
  if (Math.random() > 0.3) tmp.push(AdminTypes.BILLING_ADMIN);
  if (Math.random() > 0.2) tmp.push(AdminTypes.ROOM_ASSISTANT);
  return tmp;
};

const generate_AccountCreationPolicy = function (
  variance: UserInfoType
): AccountCreationPolicy {
  if (variance === UserInfoType.GUEST_LICENSE)
    return {
      canCreateRegularGuest: false,
      canCreateTempGuest: false,
    };
  else
    return {
      canCreateRegularGuest: Math.random() > 0.4,
      canCreateTempGuest: Math.random() > 0.3,
    };
};

const generate_UserInfos = function (variance: UserInfoType): UserInfos {
  return {
    dailyNotification: Math.random() > 0.5,
    hourlyNotification: Math.random() > 0.5,
    admin: variance === UserInfoType.FULL_LICENSE ? Math.random() > 0.5 : false,
    email: faker.internet.email(),
    name: faker.name.findName(),
    type: variance,
    personalId: Math.random() > 0.8 ? faker.commerce.department() : "",
    status: generate_UserInfoStatus(),
  };
};

const generate_UserPermissions = function (
  variance: UserInfoType
): UserPermissions {
  if (variance === UserInfoType.GUEST_LICENSE)
    return {
      accountCreationPolicy: generate_AccountCreationPolicy(variance),
      adminPermissions: [],
      boxBasePolicies: generate_BoxBasePoliciesType(3),
      tempBoxPolicy: generate_TempBoxesPolicyType(),
      visibility: UserPermissionsVisibility.NONE,
    };
  else {
    return {
      accountCreationPolicy: generate_AccountCreationPolicy(variance),
      boxBasePolicies: generate_BoxBasePoliciesType(
        Math.ceil(Math.random() * 2)
      ),
      tempBoxPolicy: generate_TempBoxesPolicyType(),
      visibility: generate_UserPermissionsVisibility(),
      adminPermissions: generate_AccountVisibility(),
    };
  }
};

export const generate_UserType = function (variance?: UserInfoType): UserType {
  let type = variance || generate_UserInfoType();
  return {
    id: faker.database.mongodbObjectId(),
    userInfos: generate_UserInfos(type),
    userPermissions: generate_UserPermissions(type),
    userCreation: generate_UserCreation(),
    statisticsUserBox: generate_UserBoxStatistics(),
    statisticsUserStorage: generate_UserStorageStatistics(),
    statisticsUserInfos: generate_UserInfoStatistics(),
  };
};

export const generate_UserTypeList = function (): UserType[] {
  let howMany = Math.ceil(Math.random() * 50);
  let tmp: UserType[] = [];
  for (let i = 0; i < howMany; i++) tmp.push(generate_UserType());
  return tmp;
};
