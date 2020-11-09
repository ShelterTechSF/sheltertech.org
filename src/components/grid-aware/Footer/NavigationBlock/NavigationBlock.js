import PropTypes from "prop-types";
import React from "react";
import shelterTechLogoWhite from "../sheltertech-logo-white.svg";
import facebookLogo from "../stories/facebook.svg";
import githubLogo from "../stories/github.svg";
import instagramLogo from "../stories/instagram.svg";
import sealOfTransparency from "../stories/seal-of-transparency.svg";
import twitterLogo from "../stories/twitter.svg";
import s from "./Navigation.module.css";

/* PropType shapes */
const FooterNavigationObjectsPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
});

const SealsPropType = PropTypes.shape({
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
});

const ShelterTechLogoPropType = PropTypes.shape({
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
});

const SocialMediaLinksPropType = PropTypes.shape({
  url: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
});

const NavigationLeftArea = ({ shelterTechLogo, socialMediaLinks }) => (
  <div>
    <img src={shelterTechLogo.logo} alt={shelterTechLogo.alt} />
    <div className={s.socialMediaLinks}>
      {socialMediaLinks.map((socialMediaLink) => (
        <a href={socialMediaLink.url} key={socialMediaLink.url}>
          <img src={socialMediaLink.logo} alt={socialMediaLink.alt} />
        </a>
      ))}
    </div>
  </div>
);

NavigationLeftArea.propTypes = {
  shelterTechLogo: ShelterTechLogoPropType.isRequired,
  socialMediaLinks: PropTypes.arrayOf(SocialMediaLinksPropType).isRequired,
};

const FooterLinks = ({ footerNavigation }) => (
  <nav className={s.footerLinksContainer}>
    {footerNavigation.map((navigation) => (
      <div className={s.footerLinksColumn} key={navigation.title}>
        <div className={s.footerLinksTitle}>{navigation.title}</div>
        <div className={s.footerLinks}>
          {navigation.links.map((link) => (
            <a href={link.url} key={link.name}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    ))}
  </nav>
);

FooterLinks.propTypes = {
  footerNavigation: PropTypes.arrayOf(FooterNavigationObjectsPropType)
    .isRequired,
};
const Seals = ({ seals }) => (
  <div className={s.seals}>
    {seals.map((seal) => (
      <img src={seal.logo} alt={seal.alt} key={seal} />
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
  footerNavigation: PropTypes.arrayOf(FooterNavigationObjectsPropType)
    .isRequired,
  seals: PropTypes.arrayOf(SealsPropType).isRequired,
};

const Navigation = ({
  footerNavigation,
  seals,
  shelterTechLogo,
  socialMediaLinks,
}) => {
  return (
    <div className={s.bleedWrapper}>
      <div className={s.navigation}>
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
  footerNavigation: PropTypes.arrayOf(FooterNavigationObjectsPropType)
    .isRequired,
  seals: PropTypes.arrayOf(SealsPropType).isRequired,
  shelterTechLogo: ShelterTechLogoPropType.isRequired,
  socialMediaLinks: PropTypes.arrayOf(SocialMediaLinksPropType).isRequired,
};

export default Navigation;
