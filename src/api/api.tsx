import axios from "api/axios";

export function getBox(
  id: string,
  successCallback?: Function,
  errorCallback?: Function
) {
  axios
    .get("/uiapi/BoxAPI/v1/rest/boxes/" + id, {})
    .then((res) => {
      successCallback?.(res.data);
    })
    .catch((res) => {
      errorCallback?.(res.data);
    });
}

export function getBoxChildren(
  boxId: string,
  folderId: string,
  successCallback?: Function,
  errorCallback?: Function
) {
  axios
    .get("/uiapi/BoxAPI/v1/rest/children/" + boxId + "/" + folderId, {})
    .then((res) => {
      successCallback?.(res.data);
    })
    .catch((res) => {
      errorCallback?.(res.data);
    });
}

export function getClientConfiguration(
  successCallback?: Function,
  errorCallback?: Function
) {
  axios
    .get("/uiapi/AccountsAPI/v1/rest/configuration")
    .then((res) => {
      successCallback?.(res.data);
    })
    .catch((res) => {
      errorCallback?.(res.data);
    });
}

export function getUser(
  id: string,
  successCallback?: Function,
  errorCallback?: Function
) {
  axios
    .get("/uiapi/UserManagementAPI/v1/rest/users/" + id)
    .then((res) => {
      successCallback?.(res.data);
    })
    .catch((res) => {
      errorCallback?.(res.data);
    });
}

export function getPasswordPolicy(
  successCallback?: Function,
  errorCallback?: Function
) {
  axios
    .get("/uiapi/EnterpriseAPI/v1/rest/settings/password")
    .then((res) => {
      successCallback?.(res.data);
    })
    .catch((res) => {
      errorCallback?.(res.data);
    });
}

export function getBoxSettings(
  successCallback?: Function,
  errorCallback?: Function
) {
  axios
    .get("/uiapi/EnterpriseAPI/v1/rest/settings/box")
    .then((res) => {
      successCallback?.(res.data);
    })
    .catch((res) => {
      errorCallback?.(res.data);
    });
}

export function getSoftwareSettings(
  successCallback?: Function,
  errorCallback?: Function
) {
  axios
    .get("/uiapi/EnterpriseAPI/v1/rest/settings/software")
    .then((res) => {
      successCallback?.(res.data);
    })
    .catch((res) => {
      errorCallback?.(res.data);
    });
}

export function getDefaultSessionTimeout(
  successCallback?: Function,
  errorCallback?: Function
) {
  axios
    .get("/uiapi/EnterpriseAPI/v1/rest/settings/session")
    .then((res) => {
      successCallback?.(res.data);
    })
    .catch((res) => {
      errorCallback?.(res.data);
    });
}
