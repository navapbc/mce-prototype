import React from "react";
import sortBy from "lodash/sortBy";

const formattedPrice = price => {
  const num = price.replace("$", "");
  return (
    <React.Fragment>
      <sup className="ds-u-font-size--h3">$</sup>
      {num}
    </React.Fragment>
  );
};

export default ({ facilities, sort }) =>
  sortBy(facilities, sort).map((facility, i) => (
    <article className="ds-l-row" key={i}>
      <div
        className={`ds-l-col ds-l-col--auto ds-u-padding-y--3 ds-u-sm-padding-x--3 ds-u-fill--primary${
          i % 2 ? "-darker" : ""
        }`}
      >
        <span className="ds-u-font-size--h1 ds-u-color--white">
          {formattedPrice(facility.price)}
        </span>
      </div>
      <div className="ds-l-col ds-u-border-top--1 ds-u-padding-y--3">
        <h3 className="ds-text ds-u-margin--0">{facility.name}</h3>
        <address className="ds-u-color--muted ds-u-font-style--normal">
          {facility.address}
        </address>
      </div>
    </article>
  ));
