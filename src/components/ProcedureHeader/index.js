import React from "react";

export default ({ procedure }) => (
  <div className="ds-u-fill--gray-lightest ds-u-padding-y--7 ds-u-margin-bottom--4 ds-u-border-bottom--2">
    <div className="ds-l-container">
      <h1 className="ds-title">{procedure.name}</h1>
      <p className="ds-u-color--gray ds-u-margin-top--0">
        Procedure code: {procedure.code}
      </p>
    </div>
  </div>
);
