import "./index.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PropTypes from "prop-types";
import React from "react";
import { SkipNav } from "@cmsgov/design-system-core";
import { withPrefix } from "gatsby-link";

const TemplateWrapper = ({ children, data, location }) => {
  const isHome = location.pathname === withPrefix("/");
  return (
    <div className="ds-base">
      <SkipNav href="#main" />
      <Header title={data.site.siteMetadata.title} isHome={isHome} />
      <main id="main">{children()}</main>
      <Footer />
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
  location: PropTypes.object
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
