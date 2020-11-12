import PropTypes from "prop-types";
import React from "react";
import { InputTextPropType } from "../../inline/InputText";
import s from "./Footer.module.css";
import InfoBlock from "./InfoBlock/InfoBlock";
import {
  Navigation,
  FooterNavigationPropType,
  SealsPropType,
  ShelterTechLogoPropType,
  SocialMediaLinksPropType,
} from "./NavigationBlock/NavigationBlock";
import SubscriptionBlock from "./SubscriptionBlock/SubscriptionBlock";

const Footer = ({
  inputText,
  footerNavigation,
  seals,
  shelterTechLogo,
  socialMediaLinks,
  address,
  employeeIdentificationNumber,
}) => {
  return (
    <footer className={s.footer}>
      <SubscriptionBlock inputText={inputText} />
      <Navigation
        footerNavigation={footerNavigation}
        seals={seals}
        shelterTechLogo={shelterTechLogo}
        socialMediaLinks={socialMediaLinks}
      />
      <InfoBlock
        employeeIdentificationNumber={employeeIdentificationNumber}
        address={address}
      />
    </footer>
  );
};

Footer.propTypes = {
  inputText: InputTextPropType.isRequired,
  footerNavigation: PropTypes.arrayOf(FooterNavigationPropType).isRequired,
  seals: PropTypes.arrayOf(SealsPropType).isRequired,
  shelterTechLogo: ShelterTechLogoPropType.isRequired,
  socialMediaLinks: PropTypes.arrayOf(SocialMediaLinksPropType).isRequired,
  employeeIdentificationNumber: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default Footer;
