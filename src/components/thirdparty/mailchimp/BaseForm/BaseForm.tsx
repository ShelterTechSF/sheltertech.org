import * as React from "react";

import "./globals.css";
import s from "./BaseForm.module.css";

/* eslint-disable react/no-danger */
// This entire file is just about embedding an external form

type BaseFormProps = {
  title: string;
  description: string;
  rawFormHTML: string;
};
const BaseForm = ({ title, description, rawFormHTML }: BaseFormProps) => (
  <div>
    <h1 className={s.title}>{title}</h1>
    <p className={s.description}>{description}</p>
    <div dangerouslySetInnerHTML={{ __html: rawFormHTML }} />
  </div>
);

export default BaseForm;
