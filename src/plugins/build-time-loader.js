module.exports = function (_context, options) {
  const { id, include } = options;

  return {
    name: "docusaurus-plugin-build-time-loader",
    configureWebpack(_config, _isServer) {
      return {
        module: {
          rules: [
            {
              test: /\.build.js$/i,
              include: include,
              use: [
                {
                  loader: `val-loader`,
                },
              ],
            },
          ],
        },
      };
    },
  };
};
