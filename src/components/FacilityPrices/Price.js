import React from "react";

const formattedPrice = price => {
  const num = price.replace("$", "");
  return (
    <strong className="ds-u-font-size--h1 ds-u-color--white">
      <sup className="ds-u-font-size--h3">$</sup>
      {num}
    </strong>
  );
};

const classes = index =>
  `ds-l-col ds-l-col--auto ds-u-padding-y--2 ds-u-text-align--right ds-u-sm-padding-x--3 ds-u-fill--primary${
    index % 2 ? "" : "-darker"
  }`;

export default ({ index, children }) => (
  <div className={classes(index)}>
    <div className="ds-font-size--small ds-u-color--white">Average cost:</div>
    {formattedPrice(children)}
  </div>
);
