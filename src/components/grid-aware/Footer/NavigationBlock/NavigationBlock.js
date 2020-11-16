import PropTypes from "prop-types";
import React from "react";
import s from "./NavigationBlock.module.css";
import {Link} from "gatsby";

/* PropType shapes */
export const FooterNavigationLinkPropType = PropTypes.oneOfType([
  PropTypes.exact({
    text: PropTypes.string,
    externalLink: PropTypes.string,
  }),
  PropTypes.exact({
    text: PropTypes.string,
    internalLink: PropTypes.string,
  }),
  PropTypes.exact({
    text: PropTypes.string,
    onClick: PropTypes.func,
  }),
]).isRequired;

export const SealsPropType = PropTypes.shape({
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  externalLink: PropTypes.string.isRequired,
});

export const ShelterTechLogoPropType = PropTypes.shape({
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
});

export const SocialMediaLinkPropType = PropTypes.shape({
  url: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
});

const NavigationLeftArea = ({ shelterTechLogo, socialMediaLinks }) => (
  <div>
    <img src={shelterTechLogo.url} alt={shelterTechLogo.alt} />
    <div className={s.socialMediaLinks}>
      {socialMediaLinks.map((socialMediaLink) => (
        <a
          className={s.socialMediaLink}
          rel="noreferrer"
          target="_blank"
          href={socialMediaLink.url}
          key={socialMediaLink.url}
        >
          <img src={socialMediaLink.logo} alt={socialMediaLink.alt} />
        </a>
      ))}
    </div>
  </div>
);

NavigationLeftArea.propTypes = {
  shelterTechLogo: ShelterTechLogoPropType.isRequired,
  socialMediaLinks: PropTypes.arrayOf(SocialMediaLinkPropType).isRequired,
};

const FooterLinks = ({ footerNavigation }) => (
  <nav className={s.navigation}>
    {footerNavigation.map((link) => {
      if (link.externalLink) {
        return (
          <a
            className={s.footerNavLink}
            rel="noreferrer"
            target="_blank"
            href={link.externalLink}
            key={link.text}
          >
            {link.text}
          </a>
        );
      }
      if (link.internalLink) {
        return (
          <Link
            className={s.footerNavLink}
            to={link.internalLink}
            key={link.text}
          >
            {link.text}
          </Link>
        );
      }
      if (link.onClick) {
        return (
          <button
            className={s.footerNavLink}
            type="button"
            onClick={(event) => {
              link.onClick(event);
            }}
            key={link.text}
          >
            {link.text}
          </button>
        );
      }
      throw new Error(
        "Missing required prop. Must specify one of: externalLink, internalLink, or onClick."
      );
    })}
  </nav>
);

FooterLinks.propTypes = {
  footerNavigation: PropTypes.arrayOf(FooterNavigationLinkPropType).isRequired,
};
const Seals = ({ seals }) => (
  <div className={s.seals}>
    {seals.map((seal) => (
      <a
        className={s.seal}
        href={seal.externalLink}
        rel="noreferrer"
        target="_blank"
      >
        <img src={seal.logo} alt={seal.alt} key={seal} />
      </a>
    ))}
  </div>
);

Seals.propTypes = {
  seals: PropTypes.arrayOf(SealsPropType).isRequired,
};

const NavigationRightArea = ({ footerNavigation, seals }) => (
  <div className={s.navigationRightArea}>
    <FooterLinks footerNavigation={footerNavigation} />
    <Seals seals={seals} />
  </div>
);

NavigationRightArea.propTypes = {
  footerNavigation: PropTypes.arrayOf(FooterNavigationLinkPropType).isRequired,
  seals: PropTypes.arrayOf(SealsPropType).isRequired,
};

export const Navigation = ({
  footerNavigation,
  seals,
  shelterTechLogo,
  socialMediaLinks,
}) => {
  return (
    <div className={s.bleedWrapper}>
      <div className={s.gridParent}>
        <NavigationLeftArea
          shelterTechLogo={shelterTechLogo}
          socialMediaLinks={socialMediaLinks}
        />
        <NavigationRightArea
          footerNavigation={footerNavigation}
          seals={seals}
        />
      </div>
    </div>
  );
};

Navigation.propTypes = {
  footerNavigation: PropTypes.arrayOf(FooterNavigationLinkPropType).isRequired,
  seals: PropTypes.arrayOf(SealsPropType).isRequired,
  shelterTechLogo: ShelterTechLogoPropType.isRequired,
  socialMediaLinks: PropTypes.arrayOf(SocialMediaLinkPropType).isRequired,
};
