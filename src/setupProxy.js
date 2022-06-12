const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/uiapi",
    createProxyMiddleware({
      target: "https://idgard.itsmyprivacy.de",
      secure: false,
      //changeOrigin: true,
    })
  );
};
