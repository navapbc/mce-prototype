import React from "react";

const colClasses =
  "ds-l-col ds-u-border-top--1 ds-u-padding-top--1 ds-u-padding-x--0";

const Row = ({ children, price }) => (
  <div className="ds-l-row ds-u-margin-y--1 ds-u-margin-x--0 ds-u-font-size--small">
    <div className={colClasses}>{children}</div>
    <strong
      className={`${colClasses} ds-l-col--auto ds-u-padding-left--1 ds-u-text-align--right`}
    >
      {price}
    </strong>
  </div>
);

export default () => (
  <React.Fragment>
    <h3 className="ds-h6">National average amount that Medicare pays</h3>
    <Row price="$1,250">At Hospital Outpatient Departments</Row>
    <Row price="$3,152">At Ambulatory Surgical Centers</Row>

    <h3 className="ds-h6 ds-u-margin-top--4">
      National average copay for a beneficiary with no Medicare supplemental
      insurance
    </h3>
    <Row price="$2,784">At Hospital Outpatient Departments</Row>
    <Row price="$6,851">At Ambulatory Surgical Centers</Row>
  </React.Fragment>
);
