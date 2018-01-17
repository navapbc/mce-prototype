import React from "react";

export default ({ procedure }) => (
  <header className="ds-l-container ds-u-padding-y--7">
    <h1 className="ds-title">{procedure.name}</h1>
    <p className="ds-u-color--muted ds-u-margin-top--0">
      <strong>Procedure code:</strong> {procedure.code}
    </p>
  </header>
);
