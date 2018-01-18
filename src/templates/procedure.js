import { Alert } from "@cmsgov/design-system-core";
import FacilityPrices from "../components/FacilityPrices";
import Helmet from "../components/Helmet";
import NationalAverage from "../components/NationalAverage";
import ProcedureHeader from "../components/ProcedureHeader";
import React from "react";

export default ({ data }) => {
  const procedure = data.proceduresJson;
  const facilities = data.allFacilityProcedurePricesJson.edges.map(e => e.node);

  return (
    <React.Fragment>
      <Helmet
        title={`${procedure.name} - Compare Medicare Costs`}
        description={`Compare the Medicare costs of ${
          procedure.name
        } across Hospital Outpatient Departments and Ambulatory Surgical Centers near you`}
      />
      <ProcedureHeader procedure={procedure} />
      <div className="ds-l-container">
        <Alert className="ds-l-row ds-u-margin-x--0">
          <div className="ds-u-measure--wide">
            <strong>Note</strong>: The prices listed below are for demonstration
            purposes only.
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
    </React.Fragment>
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
