import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ title }) => (
  <header className="ds-l-container">
    <h1 className="ds-h4">
      <Link to="/">{title}</Link>
    </h1>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
