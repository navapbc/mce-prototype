import { Alert } from "@cmsgov/design-system-core";
import FacilityPrices from "../components/FacilityPrices";
import NationalAverage from "../components/NationalAverage";
import ProcedureHeader from "../components/ProcedureHeader";
import React from "react";

export default ({ data }) => {
  const procedure = data.proceduresJson;
  const facilities = data.allFacilityProcedurePricesJson.edges.map(e => e.node);

  return (
    <main id="main">
      <ProcedureHeader procedure={procedure} />
      <div className="ds-l-container">
        <Alert
          className="ds-l-row ds-u-margin-x--0"
          heading="Pricing is for demonstration only"
        >
          <div className="ds-u-measure--wide">
            Please note: The prices listed below are for demonstration purposes
            only and aren&rsquo;t reflective of what they are in reality.
          </div>
        </Alert>

        <div className="ds-l-row ds-u-margin-top--6 ds-u-margin-bottom--2">
          <div className="ds-l-col ds-l-col--12 ds-l-md-col--8">
            <h2 className="ds-h2 ds-u-font-weight--normal">
              Facility prices near <strong>Baltimore, MD</strong>
            </h2>
            <FacilityPrices facilities={facilities} sort="price" />
          </div>
          <div className="ds-l-col ds-l-col--12 ds-l-md-col--4 ds-u-margin-top--6 ds-u-md-margin-top--0 ds-u-md-padding-left--4">
            <h2 className="ds-h2 ds-u-font-weight--normal">National average</h2>
            <NationalAverage />
          </div>
        </div>
      </div>
    </main>
  );
};

export const query = graphql`
  query ProcedurePermalinkQuery($slug: String!) {
    proceduresJson(fields: { slug: { eq: $slug } }) {
      code
      name
    }
    allFacilityProcedurePricesJson {
      edges {
        node {
          name
          address
          price
          distance
        }
      }
    }
  }
`;
