import PropTypes from "prop-types";
import React from "react";
import s from "./Footer.module.css";
import InfoBlock from "./InfoBlock";
import {
  Navigation,
  FooterNavigationLinkPropType,
  SealsPropType,
  ShelterTechLogoPropType,
  SocialMediaLinkPropType,
} from "./NavigationBlock";
import SubscriptionBlock from "./SubscriptionBlock";

const Footer = ({
  placeholderText,
  type,
  footerNavigation,
  seals,
  shelterTechLogo,
  socialMediaLinks,
  address,
  employerIdentificationNumber,
}) => {
  return (
    <footer className={s.footer}>
      <SubscriptionBlock placeholderText={placeholderText} type={type} />
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
  type: PropTypes.string.isRequired,
  footerNavigation: PropTypes.arrayOf(FooterNavigationLinkPropType).isRequired,
  seals: PropTypes.arrayOf(SealsPropType).isRequired,
  shelterTechLogo: ShelterTechLogoPropType.isRequired,
  socialMediaLinks: PropTypes.arrayOf(SocialMediaLinkPropType).isRequired,
  employerIdentificationNumber: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

Footer.defaultProps = {
  placeholderText: undefined,
};

export default Footer;
