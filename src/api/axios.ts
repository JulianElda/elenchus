import axios from "axios";

// request interceptor
axios.interceptors.request.use(
  function (config) {
    if (!config.headers) config.headers = {};
    // append csfr token on every* request
    config.headers["X-IDGARD-CSFR"] = "" + localStorage.getItem("csfrToken");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// response interceptor
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (
      error.response.status === 401 &&
      error.response.data.error === "NoSessionException"
    ) {
      // navigate to /login
      window.location.href = window.location.origin + "/login";

      // remove csfrToken from localStorage
      localStorage.removeItem("csfrToken");
    }

    return Promise.reject(error);
  }
);

export default axios;
