/**
 * @file Modifies Webpack configuration used by Gatsby to
 *  compile the CSS. We're adding the PurifyCSSPlugin, which removes
 *  any unused CSS (based on the selector found in our JS files).
 * https://www.gatsbyjs.org/docs/add-custom-webpack-config/
 * https://github.com/webpack-contrib/purifycss-webpack
 */
const glob = require("glob-all");
const path = require("path");
const PurifyCSSPlugin = require("purifycss-webpack");

module.exports = ({ config, stage }) => {
  if (stage === "build-css") {
    config.plugin("purify-css", PurifyCSSPlugin, [
      {
        paths: glob.sync([
          path.join(__dirname, "../../src/**/*{.js,.jsx,.html}"),
          // TODO: We're including ALL components here, but ideally we'd
          // only look at the components that are imported into our pages
          path.join(
            __dirname,
            "../../node_modules/@cmsgov/design-system-core/dist/components/**/*{.js,.jsx}"
          )
        ]),
        purifyOptions: {
          info: true,
          minify: true
        }
      }
    ]);

    return config;
  }

  return config;
};
