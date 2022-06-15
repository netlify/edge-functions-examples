const { join } = require("path");

module.exports = {
  onPostBuild: ({ constants }) => {
    const manifestPath = join(constants.EDGE_FUNCTIONS_DIST, "manifest.json");
    const manifest = require(manifestPath);

    console.log(manifest);
  },
};
