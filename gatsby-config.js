/**
 * @file Gatsby build configuration. Define plugins to customize the build process.
 *  https://www.gatsbyjs.org/docs/plugins/
 */
const title = "Medicare Cost Estimator";

const buildPlugins = [
  // Static build support for React Helmet
  "gatsby-plugin-react-helmet",
  // Optimize builds by removing unused lodash methods
  "gatsby-plugin-lodash",
  // Add support for querying JSON using GraphQL
  "gatsby-transformer-json",
  {
    // Add support for querying JSON files using GraphQL
    resolve: "gatsby-source-filesystem",
    options: {
      name: "src",
      path: `${__dirname}/src/`
    }
  },
  {
    // Enable Sass support
    resolve: "gatsby-plugin-sass",
    options: {
      // Include node_modules so design system imports work
      includePaths: ["node_modules"]
    }
  },
  {
    // Analyze Webpack bundles to ensure they're optimized
    resolve: "gatsby-plugin-webpack-bundle-analyzer",
    options: {
      production: true
    }
  }
];

const appPlugins = [
  {
    // Create web manifest for progressive web functionality
    // This MUST be defined BEFORE gatsby-plugin-offline
    resolve: "gatsby-plugin-manifest",
    options: {
      name: title,
      short_name: "MCE",
      start_url: "/",
      background_color: "#fff",
      theme_color: "#0071BC",
      display: "minimal-ui",
      icons: [
        {
          src: "/icon.png",
          sizes: "48x48",
          type: "image/png"
        },
        {
          src: "/icon@2x.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "/icon@3x.png",
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: "/icon@spash.png",
          sizes: "528x528",
          type: "image/png"
        }
      ]
    }
  },
  // Enable offline support
  // MUST be included AFTER gatsby-plugin-manifest
  "gatsby-plugin-offline"
];
const plugins = buildPlugins.concat(appPlugins);

module.exports = {
  // Prefix all URL's with this:
  pathPrefix: "/mce-prototype",
  siteMetadata: {
    // Metadata to be passed into our app
    title: title
  },
  plugins: plugins
};
