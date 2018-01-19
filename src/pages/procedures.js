import Helmet from "../components/Helmet";
import Link from "gatsby-link";
import React from "react";
import _ from "lodash";

const ProceduresPage = ({ data }) => {
  let procedures = data.allProceduresJson.edges.map(o => o.node);
  procedures = _.sortBy(procedures, "name");

  return (
    <React.Fragment>
      <Helmet title="Browse procedures" />
      <div className="ds-l-container ds-u-margin-top--7">
        <h1 className="ds-h1">Procedures</h1>
        <ul className="ds-c-list ds-c-list--bare">
          {procedures.map(p => (
            <li
              key={p.fields.slug}
              className="ds-u-margin-bottom--2 ds-u-border-top--1 ds-u-padding-top--2"
            >
              <h2 className="ds-h4 ds-u-margin-bottom--0">
                <Link to={`/${p.fields.slug}`}>{p.name}</Link>
              </h2>
              <span className="ds-u-color--muted">Code: {p.code}</span>
            </li>
          ))}
        </ul>
      </div>
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
          code
        }
      }
    }
  }
`;
