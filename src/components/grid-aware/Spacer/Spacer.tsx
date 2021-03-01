import * as React from "react";

import s from "./Spacer.module.css";

type SpacerProps = {
  heightDesktop: string;
  heightMobile: string;
  color?: string;
};

const Spacer = ({
  heightDesktop,
  heightMobile,
  color = "transparent",
}: SpacerProps) => (
  <div
    style={
      {
        "--spacer-height-desktop": heightDesktop,
        "--spacer-height-mobile": heightMobile,
        "--spacer-color": color,
      } as React.CSSProperties
    }
    className={s.spacer}
  />
);

export default Spacer;
