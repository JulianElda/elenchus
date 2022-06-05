import axios from "api/axios";

export function getClientConfiguration(successCallback?, errorCallback?) {
  axios
    .get("/uiapi/AccountsAPI/v1/rest/configuration")
    .then((res) => {
      successCallback?.(res.data);
    })
    .catch((res) => {
      errorCallback?.(res.data);
    });
}

export function getUser(id, successCallback?, errorCallback?) {
  axios
    .get("/uiapi/UserManagementAPI/v1/rest/users/" + id)
    .then((res) => {
      successCallback?.(res.data);
    })
    .catch((res) => {
      errorCallback?.(res.data);
    });
}

export function getPasswordPolicy(successCallback?, errorCallback?) {
  axios
    .get("/uiapi/EnterpriseAPI/v1/rest/settings/password")
    .then((res) => {
      successCallback?.(res.data);
    })
    .catch((res) => {
      errorCallback?.(res.data);
    });
}

export function getBoxSettings(successCallback?, errorCallback?) {
  axios
    .get("/uiapi/EnterpriseAPI/v1/rest/settings/box")
    .then((res) => {
      successCallback?.(res.data);
    })
    .catch((res) => {
      errorCallback?.(res.data);
    });
}

export function getSoftwareSettings(successCallback?, errorCallback?) {
  axios
    .get("/uiapi/EnterpriseAPI/v1/rest/settings/software")
    .then((res) => {
      successCallback?.(res.data);
    })
    .catch((res) => {
      errorCallback?.(res.data);
    });
}

export function getDefaultSessionTimeout(successCallback?, errorCallback?) {
  axios
    .get("/uiapi/EnterpriseAPI/v1/rest/settings/session")
    .then((res) => {
      successCallback?.(res.data);
    })
    .catch((res) => {
      errorCallback?.(res.data);
    });
}
