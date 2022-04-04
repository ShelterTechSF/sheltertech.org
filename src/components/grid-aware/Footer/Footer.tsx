import * as React from "react";
import * as s from "./Footer.module.css";
import InfoBlock from "./InfoBlock";
import {
  Navigation,
  FooterNavigationLinkProps,
  SealProps,
  ShelterTechLogoProps,
  SocialMediaLinkProps,
} from "./NavigationBlock";
import SubscriptionBlock from "./SubscriptionBlock";

type FooterProps = {
  formAction: string;
  formInputName: string;
  formInputPlaceholder: string;
  formAntiBotInputName: string;
  formDescription: string;
  footerNavigation: FooterNavigationLinkProps[];
  seals: SealProps[];
  shelterTechLogo: ShelterTechLogoProps;
  socialMediaLinks: SocialMediaLinkProps[];
  employerIdentificationNumber: string;
  address?: string;
};

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
}: FooterProps) => {
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

export default Footer;
