import Link from "gatsby-link";
import React from "react";
import Search from "../components/Search";

const IndexPage = ({ data }) => (
  <React.Fragment>
    <div className="ds-u-fill--primary-alt-lightest ds-u-padding-y--4 ds-u-margin-bottom--4 ds-u-md-padding-y--7 ds-u-md-margin-bottom--7">
      <div className="ds-l-container">
        <h1 className="ds-title ds-u-serif ds-u-color--primary-darker ds-u-margin-bottom--1">
          Medicare Cost Estimator
        </h1>
        <p className="ds-h3 ds-u-measure--wide ds-u-font-weight--normal ds-u-margin-top--0">
          Compare Medicare payments and copays for certain procedures in
          hospital outpatient departments and ambulatory surgery centers.
        </p>
        <Search procedures={data.allProceduresJson.edges} />
      </div>
    </div>
    <Link to="/procedures/">Browse all procedures</Link> (for Gatsby proof of
    concept)
  </React.Fragment>
);

export default IndexPage;

export const query = graphql`
  query ProceduresAutoCompleteQuery {
    allProceduresJson(limit: 500) {
      edges {
        node {
          fields {
            slug
          }
          code
          name
        }
      }
    }
  }
`;
