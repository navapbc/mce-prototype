import "./index.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PropTypes from "prop-types";
import React from "react";
import SkipNav from "@cmsgov/design-system-core/dist/components/SkipNav/SkipNav";
import { withPrefix } from "gatsby-link";

const TemplateWrapper = ({ children, data, location }) => {
  // This double check is a Gatsby workaround. It seems when it builds
  // the static HTML page, it's not using the prefix. If we no longer
  // set the pathPrefix property in gatsby-config.js, then we can remove
  // the withPrefix("/") check
  const isHome =
    location.pathname === withPrefix("/") || location.pathname === "/";

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
