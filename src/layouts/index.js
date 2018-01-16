import "./index.scss";
import Header from "../components/Header";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import React from "react";
import { SkipNav } from "@cmsgov/design-system-core";
import { withPrefix } from "gatsby-link";

const TemplateWrapper = ({ children, data, location }) => {
  const isHome = location.pathname === withPrefix("/");

  return (
    <div className="ds-base">
      <SkipNav href="#main" />
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: "description",
            content:
              "Compare Medicare payments and copays for certain procedures in hospital outpatient departments and ambulatory surgery centers."
          },
          { name: "robots", content: "noindex, nofollow" }
        ]}
      />
      {!isHome && <Header title={data.site.siteMetadata.title} />}
      <main id="main">{children()}</main>
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
