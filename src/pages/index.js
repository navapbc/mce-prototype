import Link from "gatsby-link";
import React from "react";

const IndexPage = () => (
  <React.Fragment>
    <h1>Hello world</h1>
    <Link to="/procedures/">Browse all procedures</Link> (for Gatsby proof of
    concept)
  </React.Fragment>
);

export default IndexPage;
