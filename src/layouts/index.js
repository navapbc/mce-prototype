import "./index.scss";
import Header from "../components/Header";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import React from "react";
import { SkipNav } from "@cmsgov/design-system-core";

const TemplateWrapper = ({ children, data }) => (
  <div className="ds-base">
    <SkipNav href="#main" />
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: "description",
          content:
            "Compare Medicare payments and copays for certain procedures in hospital outpatient departments and ambulatory surgery centers."
        }
      ]}
    />
    <Header title={data.site.siteMetadata.title} />
    <main id="main" className="ds-l-container">
      {children()}
    </main>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object
};

export default TemplateWrapper;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
