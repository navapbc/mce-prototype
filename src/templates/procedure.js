import React from "react";

export default ({ data }) => {
  return (
    <React.Fragment>
      <h1 className="ds-title">{data.proceduresJson.name}</h1>
    </React.Fragment>
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
