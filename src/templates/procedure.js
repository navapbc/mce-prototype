import { Alert } from "@cmsgov/design-system-core";
import NationalAverage from "../components/NationalAverage";
import ProcedureHeader from "../components/ProcedureHeader";
import React from "react";

export default ({ data }) => {
  const procedure = data.proceduresJson;
  return (
    <main id="main">
      <ProcedureHeader procedure={procedure} />
      <div className="ds-l-container">
        <Alert heading="Pricing is for demonstration only">
          Please note: The prices listed below are for demonstration purposes
          only and aren&rsquo;t reflective of what they are in reality.
        </Alert>

        <h2 className="ds-h2">National average&rsquo;s for this procedure</h2>
        <NationalAverage />
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
  }
`;
