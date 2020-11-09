import PropTypes from "prop-types";
import React from "react";
import s from "./Footer.module.css";
import InfoBlock from "./InfoBlock/InfoBlock";
import Navigation from "./NavigationBlock/NavigationBlock";
import SubscriptionBlock from "./SubscriptionBlock/SubscriptionBlock";

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

const Footer = ({
  inputPlaceHolderText,
  footerNavigation,
  seals,
  shelterTechLogo,
  socialMediaLinks,
  address,
  ein,
}) => {
  return (
    <footer className={s.bleedWrapper}>
      <SubscriptionBlock inputPlaceHolderText={inputPlaceHolderText} />
      <Navigation
        footerNavigation={footerNavigation}
        seals={seals}
        shelterTechLogo={shelterTechLogo}
        socialMediaLinks={socialMediaLinks}
      />
      <InfoBlock ein={ein} address={address} />
    </footer>
  );
};

Footer.propTypes = {
  inputPlaceHolderText: PropTypes.string.isRequired,
  footerNavigation: PropTypes.arrayOf(FooterNavigationObjectsPropType)
    .isRequired,
  seals: PropTypes.arrayOf(SealsPropType).isRequired,
  shelterTechLogo: ShelterTechLogoPropType.isRequired,
  socialMediaLinks: PropTypes.arrayOf(SocialMediaLinksPropType).isRequired,
  ein: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default Footer;
