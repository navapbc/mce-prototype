module.exports = {
  siteMetadata: {
    title: "Medicare Cost Estimator"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        includePaths: ["node_modules"]
      }
    }
  ]
};
