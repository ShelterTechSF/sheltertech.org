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
  formAction,
  formInputName,
  formInputPlaceholder,
  formAntiBotInputName,
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
        formAction={formAction}
        formInputName={formInputName}
        formInputPlaceholder={formInputPlaceholder}
        formAntiBotInputName={formAntiBotInputName}
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
  formAction: PropTypes.string.isRequired,
  formInputName: PropTypes.string.isRequired,
  formInputPlaceholder: PropTypes.string.isRequired,
  formAntiBotInputName: PropTypes.string.isRequired,
  formDescription: PropTypes.string.isRequired,
  footerNavigation: PropTypes.arrayOf(FooterNavigationLinkPropType).isRequired,
  seals: PropTypes.arrayOf(SealPropType).isRequired,
  shelterTechLogo: ShelterTechLogoPropType.isRequired,
  socialMediaLinks: PropTypes.arrayOf(SocialMediaLinkPropType).isRequired,
  employerIdentificationNumber: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default Footer;
