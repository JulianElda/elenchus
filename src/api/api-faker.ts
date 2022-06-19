import {
  BoxSettingsType,
  PasswordPolicyType,
  SoftwareSettingsType,
  TimeoutSettingsType,
} from "types";
import { generate_BoxSettingsType } from "./enterprise-box";
import { generate_PasswordPolicyType } from "./enterprise-password";
import { generate_SoftwareSettingsType } from "./enterprise-software";
import { generate_getDefaultSessionTimeout } from "./enterprise-timeout";

const FAKER_DELAY = 500;

const api_delay = function (): number {
  return Math.floor(Math.random() * FAKER_DELAY);
};

const delayedResolve = function (callback, param) {
  setTimeout(function () {
    callback(param);
  }, api_delay());
};

const faker_getBoxSettings = function (): Promise<BoxSettingsType> {
  return new Promise<any>((resolve: Function) => {
    delayedResolve(resolve, generate_BoxSettingsType());
  });
};

const faker_getPasswordPolicy = function (): Promise<PasswordPolicyType> {
  return new Promise<any>((resolve: Function) => {
    delayedResolve(resolve, generate_PasswordPolicyType());
  });
};

const faker_getSoftwareSettings = function (): Promise<SoftwareSettingsType> {
  return new Promise<any>((resolve: Function) => {
    delayedResolve(resolve, generate_SoftwareSettingsType());
  });
};

const faker_getDefaultSessionTimeout =
  function (): Promise<TimeoutSettingsType> {
    return new Promise<any>((resolve: Function) => {
      delayedResolve(resolve, generate_getDefaultSessionTimeout());
    });
  };

export const api = {
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

export default api;
