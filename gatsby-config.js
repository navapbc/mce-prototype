module.exports = {
  siteMetadata: {
    title: "Medicare Cost Estimator"
  },
  pathPrefix: "/mce-prototype",
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
    }
  ]
};
