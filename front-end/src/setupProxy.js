// https://create-react-app.dev/docs/proxying-api-requests-in-development#configuring-the-proxy-manually
// https://github.com/chimurai/http-proxy-middleware
const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    [
        '/cats',
        '/logout',
        '/login',
        '/user',
        '/callback',
    ],
    proxy({
      target: 'http://localhost:3000',
      changeOrigin: true,
      xfwd: true,
    })
  );
};