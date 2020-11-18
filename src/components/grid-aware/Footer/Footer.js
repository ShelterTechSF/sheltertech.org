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
  formInputPlaceholder,
  formInputValue,
  formDescription,
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
        formInputPlaceholder={formInputPlaceholder}
        formInputValue={formInputValue}
        formDescription={formDescription}
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
  formInputPlaceholder: PropTypes.string,
  formInputValue: PropTypes.string.isRequired,
  formDescription: PropTypes.string,
  footerNavigation: PropTypes.arrayOf(FooterNavigationLinkPropType).isRequired,
  seals: PropTypes.arrayOf(SealPropType).isRequired,
  shelterTechLogo: ShelterTechLogoPropType.isRequired,
  socialMediaLinks: PropTypes.arrayOf(SocialMediaLinkPropType).isRequired,
  employerIdentificationNumber: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

Footer.defaultProps = {
  formInputPlaceholder: undefined,
  formDescription: undefined,
};

export default Footer;
