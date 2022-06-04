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
