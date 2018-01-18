import "./index.scss";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ isHome, title }) => (
  <header className="ds-base--inverse">
    <div className="ds-l-container ds-u-padding-y--2">
      <div className="ds-l-row">
        <h1 className="ds-h4 ds-u-margin--0 ds-l-col ds-l-col--6">
          <Link className="ds-u-color--white ds-u-text-decoration--none" to="/">
            {title}
          </Link>
        </h1>
        {!isHome && (
          <div className="ds-l-col ds-l-col--6 ds-u-text-align--right">
            <Link className="ds-u-color--white" to="/">
              Back to search
            </Link>
          </div>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  isHome: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default Header;
