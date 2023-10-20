import * as React from "react";

import * as s from "./PartnersAndSponsorsBlock.module.css";

export type LogoPropType = Readonly<{
  /// The URL of the image
  url: string;
  /// Alternative text for the image
  alt: string;
  /// A link for a URL to go to when clicking on the logo
  link?: string;
}>;

type WithOptionalLinkProps = {
  link: string | undefined;
  children: React.ReactNode;
};

// Component that makes it easier to wrap content with an optional link.
//
// If `link` is defined, then wrap `children` with an <a> tag pointing to that
// link. Otherwise, just render `children`.
const WithOptionalLink = ({ link, children }: WithOptionalLinkProps) =>
  link ? (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <>{children}</>
  );

type PartnersAndSponsorsBlockProps = {
  title: string;
  partnersAndSponsors: readonly LogoPropType[];
};

const PartnersAndSponsorsBlock = ({
  title,
  partnersAndSponsors,
}: PartnersAndSponsorsBlockProps) => {
  const GridAreaLeft = () => (
    <div className={s.gridAreaLeft}>
      <h1 className={s.title}>{title}</h1>
    </div>
  );

  const GridAreaRight = () => (
    <div className={s.gridAreaRight}>
      <div className={s.logosWrapper}>
        {partnersAndSponsors.map((logo) => (
          <div className={s.logoContainer} key={logo.alt}>
            <WithOptionalLink link={logo.link}>
              <img className={s.logo} src={logo.url} alt={logo.alt} />
            </WithOptionalLink>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={s.bleedWrapper}>
      <section className={s.gridParent}>
        <GridAreaLeft />
        <GridAreaRight />
      </section>
    </div>
  );
};

export default PartnersAndSponsorsBlock;
