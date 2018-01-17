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
        <div className="ds-l-row">
          <Alert heading="Pricing is for demonstration only">
            Please note: The prices listed below are for demonstration purposes
            only and aren&rsquo;t reflective of what they are in reality.
          </Alert>

          <h2 className="ds-h2 ds-u-font-weight--normal">
            National average&rsquo;s for this procedure
          </h2>
          <NationalAverage />
        </div>

        <div className="ds-l-row ds-u-margin-top--6 ds-u-margin-bottom--2">
          <h2 className="ds-h2 ds-u-font-weight--normal">
            Facility prices near <strong>Baltimore, MD</strong>
          </h2>
        </div>
        <FacilityPrices facilities={facilities} sort="price" />
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
