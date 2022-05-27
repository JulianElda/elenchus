const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/uiapi",
    createProxyMiddleware({
      target: "https://app-shaun.itsmyprivacy.de",
      secure: false,
      //changeOrigin: true,
    })
  );
};
