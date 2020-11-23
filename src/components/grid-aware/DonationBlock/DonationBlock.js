import PropTypes from "prop-types";
import React from "react";

import s from "./DonationBlock.module.css";

const rawLGLForm = {
  // There are two manual modifications to this snippet from Little Green Light:
  // - The height has been manually modified, since the original value didn't seem
  //   to work. Note that Firefox's text box sizes seem to be slightly larger,
  //   so the height needs to be large enough to accommodate Firefox
  // - Scrolling has been enabled, since in a worst-case situation, we don't
  //   want the submit button to be cut off and unable to be scrolled to.
  __html: `
<iframe onload="window.parent.scrollTo(0,0)" height="1040" allowTransparency="true" frameborder="0" scrolling="yes" style="width:100%;border:none"  src="https://secure.lglforms.com/form_engine/s/0wDrXsUXwzxrT32_RHQGrw"><a href="https://secure.lglforms.com/form_engine/s/0wDrXsUXwzxrT32_RHQGrw">Fill out my LGL Form!</a></iframe>
`,
};

const LGLForm = () => (
  // eslint-disable-next-line react/no-danger
  <div className={s.formWrapper} dangerouslySetInnerHTML={rawLGLForm} />
);

const DonationBlock = ({
  mainTitle,
  givingTuesdayImage,
  givingTuesdayParagraph,
  mainDescription,
  whyDonateTitle,
  whyDonateList,
  impactTitle,
  impactList,
}) => {
  let title;

  if (mainTitle && !givingTuesdayImage) {
    title = <h1 className={s.mainTitle}>{mainTitle}</h1>;
  } else if (givingTuesdayImage && !mainTitle) {
    title = (
      <img
        className={s.mainTitleImage}
        src={givingTuesdayImage.url}
        alt={givingTuesdayImage.alt}
      />
    );
  } else {
    throw Error("Please specify only a mainTitle or givingTuesdayImage prop.");
  }

  return (
    <div className={s.bleedWrapper}>
      <div className={s.gridParent}>
        <div className={s.gridAreaHeadline}>
          {title}
          <div className={s.mainDescription}>{mainDescription}</div>
          {givingTuesdayParagraph &&
            givingTuesdayParagraph.map((paragraph, index) => (
              <div
                className={s.givingTuesdayParagraph}
                key={`${paragraph + index}`}
              >
                {paragraph}
              </div>
            ))}
        </div>
        <div className={s.gridAreaForm}>
          <LGLForm />
        </div>
        {mainTitle && (
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
        )}
      </div>
    </div>
  );
};

DonationBlock.propTypes = {
  mainTitle: PropTypes.string,
  givingTuesdayImage: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  givingTuesdayParagraph: PropTypes.arrayOf(PropTypes.node),
  mainDescription: PropTypes.string.isRequired,
  whyDonateTitle: PropTypes.string,
  whyDonateList: PropTypes.arrayOf(PropTypes.string),
  impactTitle: PropTypes.string,
  impactList: PropTypes.arrayOf(PropTypes.string),
};

DonationBlock.defaultProps = {
  mainTitle: null,
  givingTuesdayImage: null,
  givingTuesdayParagraph: null,
  whyDonateTitle: null,
  whyDonateList: null,
  impactTitle: null,
  impactList: null,
};

export default DonationBlock;
