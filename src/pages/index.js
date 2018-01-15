import Link from "gatsby-link";
import React from "react";

const IndexPage = () => (
  <React.Fragment>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </React.Fragment>
);

export default IndexPage;
