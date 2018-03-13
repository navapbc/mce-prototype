import Price from "./Price";
import React from "react";
import sortBy from "lodash/sortBy";

const infoClasses = index =>
  `ds-l-col ds-u-border-top--1 ds-u-padding-y--3${
    index % 2 ? "" : " ds-u-fill--gray-lightest"
  }`;

export default ({ facilities, sort }) =>
  sortBy(facilities, sort).map((facility, i) => (
    <article
      className="ds-l-row ds-u-margin-x--0 ds-u-justify-content--center"
      key={i}
    >
      <Price index={i}>{facility.price}</Price>
      <div className={infoClasses(i)}>
        <h3 className="ds-text ds-u-margin--0">{facility.name}</h3>
        <address className="ds-u-color--gray ds-u-font-style--normal">
          {facility.address}
        </address>
        <div className="ds-u-color--gray">Type: {facility.type}</div>
      </div>
    </article>
  ));
