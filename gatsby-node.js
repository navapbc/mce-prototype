/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");

/**
 * Add a slug field to each procedure object
 */
exports.onCreateNode = ({ boundActionCreators, node }) => {
  if (node.internal.type === "ProceduresJson") {
    const { createNodeField } = boundActionCreators;
    const slug = `procedures/${node.code}`;
    createNodeField({ node, name: "slug", value: slug });
  }
};

/**
 * Dynamically create a page for each procedure
 */
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise(resolve => {
    graphql(`
      {
        allProceduresJson(limit: 500) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allProceduresJson.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/procedure.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug
          }
        });
      });
      resolve();
    });
  });
};
