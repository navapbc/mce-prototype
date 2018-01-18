import Helmet from "react-helmet";
import React from "react";
import Search from "../components/Search";

const IndexPage = ({ data }) => (
  <React.Fragment>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: "description",
          content:
            "Compare Medicare payments and copays for certain procedures in hospital outpatient departments and ambulatory surgery centers."
        },
        { name: "robots", content: "noindex, nofollow" }
      ]}
    />
    <div className="ds-u-fill--primary-alt-lightest ds-u-padding-y--4 ds-u-margin-bottom--4 ds-u-md-padding-y--7 ds-u-md-margin-bottom--7">
      <div className="ds-l-container">
        <h1 className="ds-title ds-u-serif ds-u-color--primary-darker ds-u-margin-bottom--1">
          Compare procedure costs
        </h1>
        <p className="ds-h3 ds-u-measure--wide ds-u-font-weight--normal ds-u-margin-top--0">
          Compare Medicare payments and copays for certain procedures in
          hospital outpatient departments and ambulatory surgery centers.
        </p>
        <Search procedures={data.allProceduresJson.edges} />
      </div>
    </div>
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
    site {
      siteMetadata {
        title
      }
    }
  }
`;
