import Helmet from "react-helmet";
import React from "react";
import { withPrefix } from "gatsby-link";

/**
 * The base "Helmet", which adds meta tags in the <head>.
 * Each page will then set its own page and optionally a description.
 */
export default ({ title, description }) => {
  const meta = [{ name: "robots", content: "noindex, nofollow" }];

  if (description) {
    meta.push({
      name: "description",
      content: description
    });
  }

  const props = {
    title: title,
    link: [{ rel: "shortcut icon", href: withPrefix("/icon.png") }]
  };

  return (
    <Helmet meta={meta} {...props}>
      <html lang="en" />
    </Helmet>
  );
};
