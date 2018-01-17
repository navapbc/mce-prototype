import "./index.scss";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ title }) => (
  <header className="ds-base--inverse">
    <h1 className="ds-l-container ds-h4">
      <Link
        className="ds-u-color--white ds-u-text-decoration--none ds-u-padding-y--2 ds-u-display--inline-block"
        to="/"
      >
        {title}
      </Link>
    </h1>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
