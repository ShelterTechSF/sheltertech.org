import * as React from "react";

import * as s from "./DonationBlock.module.css";

const rawLGLForm = {
  // There are two manual modifications to this snippet from Little Green Light:
  // - The height has been manually modified, since the original value didn't seem
  //   to work. Note that Firefox's text box sizes seem to be slightly larger,
  //   so the height needs to be large enough to accommodate Firefox
  // - Scrolling has been enabled, since in a worst-case situation, we don't
  //   want the submit button to be cut off and unable to be scrolled to.
  __html: `
<iframe title="Donation Form" onload="window.parent.scrollTo(0,0)" height="1470" allowTransparency="true" frameborder="0" scrolling="yes" style="width:100%;border:none"  src="https://secure.lglforms.com/form_engine/s/0wDrXsUXwzxrT32_RHQGrw"><a href="https://secure.lglforms.com/form_engine/s/0wDrXsUXwzxrT32_RHQGrw">Fill out my LGL Form!</a></iframe>
`,
};

const LGLForm = () => (
  // eslint-disable-next-line react/no-danger
  <div className={s.formWrapper} dangerouslySetInnerHTML={rawLGLForm} />
);

type DonationBlockProps = {
  mainTitle: string;
  mainDescription: string;
  whyDonateTitle: string;
  whyDonateList: string[];
  impactTitle: string;
  impactList: string[];
};

const DonationBlock = ({
  mainTitle,
  mainDescription,
  whyDonateTitle,
  whyDonateList,
  impactTitle,
  impactList,
}: DonationBlockProps) => (
  <div className={s.bleedWrapper}>
    <div className={s.gridParent}>
      <div className={s.gridAreaHeadline}>
        <h1 className={s.mainTitle}>{mainTitle}</h1>
        <div className={s.mainDescription}>{mainDescription}</div>
      </div>
      <div className={s.gridAreaForm}>
        <LGLForm />
      </div>
      <div className={s.gridAreaDescription}>
        <h2 className={s.whyDonateTitle}>{whyDonateTitle}</h2>
        <ul className={s.list}>
          {whyDonateList.map((reason) => (
            <li className={s.listItem} key={reason}>
              {reason}
            </li>
          ))}
        </ul>
        <h2 className={s.impactTitle}>{impactTitle}</h2>
        <ul className={s.list}>
          {impactList.map((reason) => (
            <li className={s.listItem} key={reason}>
              {reason}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default DonationBlock;
