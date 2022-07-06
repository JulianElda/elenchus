import {
  BoxType,
  BoxListResponseType,
  BoxSettingsType,
  ClientConfigType,
  ClientConfigUserTypes,
  UserType,
  PasswordPolicyType,
  SoftwareSettingsType,
  TimeoutSettingsType,
  EntryItemResponseType,
  FinderItemType,
} from "types";
import { generate_BoxType, generate_BoxListResponseType } from "./box";
import { generate_ClientConfigType } from "./client-config";
import { generate_EntryItemResponseType } from "./entry-item";
import { generate_BoxSettingsType } from "./enterprise-box";
import { generate_PasswordPolicyType } from "./enterprise-password";
import { generate_SoftwareSettingsType } from "./enterprise-software";
import { generate_getDefaultSessionTimeout } from "./enterprise-timeout";
import { generate_FinderItemTypes } from "./finder-item";
import { generate_UserType, generate_UserTypeList } from "./user";

const FAKER_DELAY = 200;

const api_delay = function (): number {
  return Math.floor(Math.random() * FAKER_DELAY);
};

const delayedResolve = function (callback: Function, param: any) {
  setTimeout(function () {
    callback(param);
  }, api_delay());
};

const faker_getBoxSettings = function (): Promise<BoxSettingsType> {
  return new Promise<BoxSettingsType>((resolve: Function) => {
    delayedResolve(resolve, generate_BoxSettingsType());
  });
};

const faker_getPasswordPolicy = function (): Promise<PasswordPolicyType> {
  return new Promise<PasswordPolicyType>((resolve: Function) => {
    delayedResolve(resolve, generate_PasswordPolicyType());
  });
};

const faker_getSoftwareSettings = function (): Promise<SoftwareSettingsType> {
  return new Promise<SoftwareSettingsType>((resolve: Function) => {
    delayedResolve(resolve, generate_SoftwareSettingsType());
  });
};

const faker_getDefaultSessionTimeout =
  function (): Promise<TimeoutSettingsType> {
    return new Promise<TimeoutSettingsType>((resolve: Function) => {
      delayedResolve(resolve, generate_getDefaultSessionTimeout());
    });
  };

const faker_getBoxChildren = function (): Promise<EntryItemResponseType> {
  return new Promise<EntryItemResponseType>((resolve: Function) => {
    delayedResolve(resolve, generate_EntryItemResponseType());
  });
};

const faker_getBox = function (): Promise<BoxType> {
  return new Promise<BoxType>((resolve: Function) => {
    delayedResolve(resolve, generate_BoxType());
  });
};

const faker_paginateBox = function (): Promise<BoxListResponseType> {
  return new Promise<BoxListResponseType>((resolve: Function) => {
    delayedResolve(resolve, generate_BoxListResponseType());
  });
};

const faker_findItemsInBox = function (): Promise<FinderItemType[]> {
  return new Promise<FinderItemType[]>((resolve: Function) => {
    delayedResolve(resolve, generate_FinderItemTypes());
  });
};

const faker_getClientConfiguration = function (
  type: ClientConfigUserTypes
): Promise<ClientConfigType> {
  return new Promise<ClientConfigType>((resolve: Function) => {
    delayedResolve(resolve, generate_ClientConfigType(type));
  });
};

const faker_getUser = function (): Promise<UserType> {
  return new Promise<UserType>((resolve: Function) => {
    delayedResolve(resolve, generate_UserType());
  });
};

const faker_paginateUser = function (): Promise<UserType[]> {
  return new Promise<UserType[]>((resolve: Function) => {
    delayedResolve(resolve, generate_UserTypeList());
  });
};

const faker_login = function (): Promise<ClientConfigType> {
  return new Promise((resolve: Function) => {
    delayedResolve(
      resolve,
      generate_ClientConfigType(ClientConfigUserTypes.ADMIN)
    );
  });
};

export const account_api = {
  getClientConfiguration: function (
    type?: ClientConfigUserTypes,
    successCallback?: Function,
    errorCallback?: Function
  ) {
    faker_getClientConfiguration(type || ClientConfigUserTypes.ADMIN)
      .then((res) => {
        successCallback?.(res);
      })
      .catch((res) => {
        errorCallback?.(res);
      });
  },
};

export const login_api = {
  login: function (
    _payload,
    successCallback?: Function,
    errorCallback?: Function
  ) {
    faker_login()
      .then((res) => {
        successCallback?.(res);
      })
      .catch((res) => {
        errorCallback?.(res);
      });
  },
};

export const enterprise_api = {
  getBoxSettings: function (
    successCallback?: Function,
    errorCallback?: Function
  ) {
    faker_getBoxSettings()
      .then((res) => {
        successCallback?.(res);
      })
      .catch((res) => {
        errorCallback?.(res);
      });
  },
  getPasswordPolicy: function (
    successCallback?: Function,
    errorCallback?: Function
  ) {
    faker_getPasswordPolicy()
      .then((res) => {
        successCallback?.(res);
      })
      .catch((res) => {
        errorCallback?.(res);
      });
  },
  getSoftwareSettings: function (
    successCallback?: Function,
    errorCallback?: Function
  ) {
    faker_getSoftwareSettings()
      .then((res) => {
        successCallback?.(res);
      })
      .catch((res) => {
        errorCallback?.(res);
      });
  },
  getDefaultSessionTimeout: function (
    successCallback?: Function,
    errorCallback?: Function
  ) {
    faker_getDefaultSessionTimeout()
      .then((res) => {
        successCallback?.(res);
      })
      .catch((res) => {
        errorCallback?.(res);
      });
  },
};

export const file_api = {
  getBoxChildren: function (
    _boxId: string,
    _folderId: string,
    successCallback?: Function,
    errorCallback?: Function
  ) {
    faker_getBoxChildren()
      .then((res) => {
        successCallback?.(res);
      })
      .catch((res) => {
        errorCallback?.(res);
      });
  },
  paginateBox: function (
    _limit: number,
    _start: number,
    successCallback?: Function,
    errorCallback?: Function
  ) {
    faker_paginateBox()
      .then((res) => {
        successCallback?.(res);
      })
      .catch((res) => {
        errorCallback?.(res);
      });
  },
  getBox: function (
    _id: string,
    successCallback?: Function,
    errorCallback?: Function
  ) {
    faker_getBox()
      .then((res) => {
        successCallback?.(res);
      })
      .catch((res) => {
        errorCallback?.(res);
      });
  },
  findItemsInBox: function (
    _boxId: string,
    _types: string,
    _name: string,
    successCallback?: Function,
    errorCallback?: Function
  ) {
    faker_findItemsInBox()
      .then((res) => {
        successCallback?.(res);
      })
      .catch((res) => {
        errorCallback?.(res);
      });
  },
};

export const user_api = {
  getUser: function (
    _id: string,
    successCallback?: Function,
    errorCallback?: Function
  ) {
    faker_getUser()
      .then((res) => {
        successCallback?.(res);
      })
      .catch((res) => {
        errorCallback?.(res);
      });
  },
  paginateUser: function (
    _limit: number,
    _start: number,
    successCallback?: Function,
    errorCallback?: Function
  ) {
    faker_paginateUser()
      .then((res) => {
        successCallback?.(res);
      })
      .catch((res) => {
        errorCallback?.(res);
      });
  },
};

export const api = {};

export default api;
