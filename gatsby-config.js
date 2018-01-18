const title = "Medicare Cost Estimator";

module.exports = {
  pathPrefix: "/mce-prototype",
  siteMetadata: {
    title: title
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        includePaths: ["node_modules"]
      }
    },
    {
      // This MUST be defined BEFORE gatsby-plugin-offline
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: "MCE",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "minimal-ui",
        icons: [
          {
            src: `/icon.png`,
            sizes: `48x48`,
            type: `image/png`
          },
          {
            src: `/icon@2x.png`,
            sizes: `96x96`,
            type: `image/png`
          },
          {
            src: `/icon@3x.png`,
            sizes: `144x144`,
            type: `image/png`
          },
          {
            src: `/icon@spash.png`,
            sizes: `528x528`,
            type: `image/png`
          }
        ]
      }
    },
    "gatsby-plugin-offline"
  ]
};
