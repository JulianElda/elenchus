import axios from "api/axios";

const api = {
  login: function (
    payload,
    successCallback?: Function,
    errorCallback?: Function
  ) {
    axios
      .post("/uiapi/AccountsAPI/v1/rest/login/", payload)
      .then((res) => {
        successCallback?.(res.data);
      })
      .catch((res) => {
        errorCallback?.(res.response.data);
      });
  },

  logout: function (successCallback?: Function, errorCallback?: Function) {
    axios
      .post("/uiapi/AccountsAPI/v1/rest/logout?opt=THIS")
      .then((res) => {
        successCallback?.(res.data);
      })
      .catch((res) => {
        errorCallback?.(res.response.data);
      });
  },

  getBox: function (
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
        errorCallback?.(res.response.data);
      });
  },

  getBoxChildren: function (
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
        errorCallback?.(res.response.data);
      });
  },

  getDownloadId: function (
    payload,
    override,
    successCallback?: Function,
    errorCallback?: Function
  ) {
    axios
      .post(
        "/uiapi/FileAPI/v1/rest/gdid?" +
          (override == null ? "" : "&override=" + encodeURIComponent(override)),
        payload
      )
      .then((res) => {
        successCallback?.(res.data);
      })
      .catch((res) => {
        errorCallback?.(res.response.data);
      });
  },

  findItemsInBox: function (
    boxId: string,
    types: string,
    name: string,
    successCallback?: Function,
    errorCallback?: Function
  ) {
    axios
      .get(
        "/uiapi/FilterAPI/v1/rest/boxes/" +
          boxId +
          "/nodes?" +
          types +
          "&" +
          name
      )
      .then((res) => {
        successCallback?.(res.data);
      })
      .catch((res) => {
        errorCallback?.(res.response.data);
      });
  },

  getClientConfiguration: function (
    successCallback?: Function,
    errorCallback?: Function
  ) {
    axios
      .get("/uiapi/AccountsAPI/v1/rest/configuration")
      .then((res) => {
        successCallback?.(res.data);
      })
      .catch((res) => {
        errorCallback?.(res.response.data);
      });
  },

  getUser: function (
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
        errorCallback?.(res.response.data);
      });
  },

  paginateBox: function (
    limit: number,
    start: number,
    successCallback?: Function,
    errorCallback?: Function
  ) {
    axios
      .get(
        "/uiapi/BoxAPI/v1/rest/partial_boxes?nbBoxes=" +
          (limit - 1) +
          "&offset=" +
          start
      )
      .then((res) => {
        successCallback?.(res.data);
      })
      .catch((res) => {
        errorCallback?.(res.response.data);
      });
  },

  paginateUser: function (
    limit: number,
    start: number,
    successCallback?: Function,
    errorCallback?: Function
  ) {
    axios
      .get(
        "/uiapi/UserManagementAPI/v1/rest/users_partial?limit=" +
          limit +
          "&offset=" +
          start
      )
      .then((res) => {
        successCallback?.(res.data);
      })
      .catch((res) => {
        errorCallback?.(res.response.data);
      });
  },

  getPasswordPolicy: function (
    successCallback?: Function,
    errorCallback?: Function
  ) {
    axios
      .get("/uiapi/EnterpriseAPI/v1/rest/settings/password")
      .then((res) => {
        successCallback?.(res.data);
      })
      .catch((res) => {
        errorCallback?.(res.response.data);
      });
  },

  getBoxSettings: function (
    successCallback?: Function,
    errorCallback?: Function
  ) {
    axios
      .get("/uiapi/EnterpriseAPI/v1/rest/settings/box")
      .then((res) => {
        successCallback?.(res.data);
      })
      .catch((res) => {
        errorCallback?.(res.response.data);
      });
  },

  getSoftwareSettings(successCallback?: Function, errorCallback?: Function) {
    axios
      .get("/uiapi/EnterpriseAPI/v1/rest/settings/software")
      .then((res) => {
        successCallback?.(res.data);
      })
      .catch((res) => {
        errorCallback?.(res.response.data);
      });
  },

  getDefaultSessionTimeout(
    successCallback?: Function,
    errorCallback?: Function
  ) {
    axios
      .get("/uiapi/EnterpriseAPI/v1/rest/settings/session")
      .then((res) => {
        successCallback?.(res.data);
      })
      .catch((res) => {
        errorCallback?.(res.response.data);
      });
  },
};

export default api;
