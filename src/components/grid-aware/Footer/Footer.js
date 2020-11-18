import PropTypes from "prop-types";
import React from "react";
import s from "./Footer.module.css";
import InfoBlock from "./InfoBlock";
import {
  Navigation,
  FooterNavigationLinkPropType,
  SealPropType,
  ShelterTechLogoPropType,
  SocialMediaLinkPropType,
} from "./NavigationBlock";
import SubscriptionBlock from "./SubscriptionBlock";

const Footer = ({
  placeholderText,
  email,
  text,
  footerNavigation,
  seals,
  shelterTechLogo,
  socialMediaLinks,
  address,
  employerIdentificationNumber,
}) => {
  return (
    <footer className={s.footer}>
      <SubscriptionBlock
        placeholderText={placeholderText}
        email={email}
        text={text}
      />
      <Navigation
        footerNavigation={footerNavigation}
        seals={seals}
        shelterTechLogo={shelterTechLogo}
        socialMediaLinks={socialMediaLinks}
      />
      <InfoBlock
        employerIdentificationNumber={employerIdentificationNumber}
        address={address}
      />
    </footer>
  );
};

Footer.propTypes = {
  placeholderText: PropTypes.string,
  email: PropTypes.string.isRequired,
  text: PropTypes.string,
  footerNavigation: PropTypes.arrayOf(FooterNavigationLinkPropType).isRequired,
  seals: PropTypes.arrayOf(SealPropType).isRequired,
  shelterTechLogo: ShelterTechLogoPropType.isRequired,
  socialMediaLinks: PropTypes.arrayOf(SocialMediaLinkPropType).isRequired,
  employerIdentificationNumber: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

Footer.defaultProps = {
  placeholderText: undefined,
  text: undefined,
};

export default Footer;
