import axios from "axios";

// request interceptor
axios.interceptors.request.use(function (config) {
    if (!config.headers)
      config.headers = {}
    config.headers["X-IDGARD-CSFR"] = ""+localStorage.getItem("csfrToken");
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// response interceptor
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  window.location.href = window.location.origin + "/login"
  return Promise.reject(error);
});

export default axios;