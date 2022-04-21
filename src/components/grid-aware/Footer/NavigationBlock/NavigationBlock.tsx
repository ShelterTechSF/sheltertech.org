import { Link } from "gatsby";
import * as React from "react";

import PrismicLink from "../../../inline/PrimsicLink";
import type { MinimalPrismicLinkType } from "../../../inline/PrimsicLink";
import * as s from "./NavigationBlock.module.css";

/* PropType shapes */
export type FooterNavigationLinkProps = {
  text: string;
  externalLink?: string;
  internalLink?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type SealProps = {
  logo: string;
  alt: string;
  link: string;
};

export type ShelterTechLogoProps = {
  url: string;
  alt: string;
  link?: MinimalPrismicLinkType;
};

export type SocialMediaLinkProps = {
  logo: string;
  alt: string;
  link: string;
};

type NavigationLeftAreaProps = {
  shelterTechLogo: ShelterTechLogoProps;
  socialMediaLinks: SocialMediaLinkProps[];
};

const NavigationLeftArea = ({
  shelterTechLogo,
  socialMediaLinks,
}: NavigationLeftAreaProps) => (
  <div>
    <PrismicLink linkData={shelterTechLogo.link}>
      <img src={shelterTechLogo.url} alt={shelterTechLogo.alt} />
    </PrismicLink>
    <div className={s.socialMediaLinks}>
      {socialMediaLinks.map((socialMediaLink) => (
        <a
          className={s.socialMediaLink}
          rel="noreferrer"
          target="_blank"
          href={socialMediaLink.link}
          key={socialMediaLink.link}
        >
          <img src={socialMediaLink.logo} alt={socialMediaLink.alt} />
        </a>
      ))}
    </div>
  </div>
);

type FooterLinksProps = {
  footerNavigation: FooterNavigationLinkProps[];
};

const FooterLinks = ({ footerNavigation }: FooterLinksProps) => (
  <nav className={s.navigation}>
    {footerNavigation.map((link) => {
      const { externalLink, internalLink, onClick, text } = link;
      if (externalLink) {
        return (
          <a
            className={s.footerNavLink}
            rel="noreferrer"
            target="_blank"
            href={externalLink}
            key={text}
          >
            {text}
          </a>
        );
      }
      if (internalLink) {
        return (
          <Link className={s.footerNavLink} to={internalLink} key={text}>
            {text}
          </Link>
        );
      }
      if (onClick) {
        return (
          <button
            className={s.footerNavLink}
            type="button"
            onClick={(event) => {
              onClick(event);
            }}
            key={text}
          >
            {text}
          </button>
        );
      }
      throw new Error(
        "Missing required prop. Must specify one of: externalLink, internalLink, or onClick."
      );
    })}
  </nav>
);

type SealsProps = {
  seals: SealProps[];
};

const Seals = ({ seals }: SealsProps) => (
  <div className={s.seals}>
    {seals.map((seal) => (
      <a
        className={s.seal}
        href={seal.link}
        rel="noreferrer"
        target="_blank"
        key={seal.logo}
      >
        <img className={s.sealImage} src={seal.logo} alt={seal.alt} />
      </a>
    ))}
  </div>
);

type NavigationRightAreaProps = {
  footerNavigation: FooterNavigationLinkProps[];
  seals: SealProps[];
};

const NavigationRightArea = ({
  footerNavigation,
  seals,
}: NavigationRightAreaProps) => (
  <div className={s.navigationRightArea}>
    <FooterLinks footerNavigation={footerNavigation} />
    <Seals seals={seals} />
  </div>
);

type NavigationProps = {
  footerNavigation: FooterNavigationLinkProps[];
  seals: SealProps[];
  shelterTechLogo: ShelterTechLogoProps;
  socialMediaLinks: SocialMediaLinkProps[];
};

export const Navigation = ({
  footerNavigation,
  seals,
  shelterTechLogo,
  socialMediaLinks,
}: NavigationProps) => {
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
