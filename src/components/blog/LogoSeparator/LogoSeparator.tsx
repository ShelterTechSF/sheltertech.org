import React from "react";
import * as s from "./LogoSeparator.module.css";
import LogoSeparatorSvg from "./LogoSeparator.svg";

const LogoSeparator = () => (
  <img className={s.logoSeparator} src={LogoSeparatorSvg} alt="" />
);

export default LogoSeparator;
