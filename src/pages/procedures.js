import Link from "gatsby-link";
import React from "react";

const ProceduresPage = ({ data }) => {
  return (
    <React.Fragment>
      <h1>Procedures</h1>
      <ul>
        {data.allProceduresJson.edges.map(({ node }) => (
          <li key={node.fields.slug}>
            <Link to={`/${node.fields.slug}`}>{node.name}</Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ProceduresPage;

export const query = graphql`
  query ProceduresQuery {
    allProceduresJson(limit: 500) {
      edges {
        node {
          fields {
            slug
          }
          name
        }
      }
    }
  }
`;
