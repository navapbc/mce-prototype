import GitHubLogo from "../../images/github.svg";
import React from "react";

const links = [
  {
    label: "About Medicare",
    url: "https://www.medicare.gov/about-us/about-medicare.html"
  },
  {
    label: "Glossary",
    url: "https://www.medicare.gov/glossary/a.html"
  },
  {
    label: "Accessibility/Nondiscrimination",
    url:
      "https://www.medicare.gov/about-us/nondiscrimination/accessibility-nondiscrimination.html"
  },
  {
    label: "Privacy policy",
    url:
      "http://www.cms.gov/About-CMS/Agency-Information/Aboutwebsite/Privacy-Policy.html"
  },
  {
    label: "Linking policy",
    url:
      "https://www.cms.gov/About-CMS/Agency-Information/Aboutwebsite/index.html"
  },
  {
    label: "Using this site",
    url:
      "https://www.cms.gov/About-CMS/Agency-Information/Aboutwebsite/Help.html"
  },
  {
    label: "Plain writing",
    url: "https://www.medicare.gov/about-us/plain-writing/plain-writing.html"
  }
];

const Footer = () => (
  <footer className="ds-u-border-top--1 ds-u-margin-top--7 ds-u-padding-y--3">
    <div className="ds-l-container ds-u-padding-y--2">
      <div className="ds-l-row ds-u-margin-bottom--2">
        <a
          className="ds-l-col ds-l-col--auto"
          href="https://github.com/navahq/mce-prototype"
        >
          <img
            className="ds-u-margin-right--1"
            src={GitHubLogo}
            alt="GitHub logo"
            width="16"
            height="16"
          />
          <strong>View prototype on GitHub</strong>
        </a>
      </div>
      <ul className="ds-l-row ds-c-list ds-c-list--bare ds-u-font-size--small">
        {links.map((link, i) => (
          <li key={i} className="ds-l-col ds-l-col--auto">
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
