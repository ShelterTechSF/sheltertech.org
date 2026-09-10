"use client";

import { FormEvent, useState } from "react";
import posthog from "posthog-js";

const opportunities = ["Software development", "Product management", "Events", "Outreach and marketing", "Research and design", "Fundraising", "Partnerships", "Board membership", "Other"];

export function VolunteerForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const interests = opportunities.filter((item) => formData.getAll("interests").includes(item));
    const data = Object.fromEntries(formData);
    const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, interests, formType: "volunteer" }) });
    setStatus(response.ok ? "success" : "error");
    if (response.ok) {
      posthog.capture("volunteer_form_completed");
      if (formData.get("newsletter") === "yes") {
        posthog.capture("newsletter_subscription_completed", { form_location: "volunteer_form" });
      }
      form.reset();
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="sr-only" aria-hidden="true"><label htmlFor="volunteer-website">Website</label><input id="volunteer-website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <div className="field"><label htmlFor="first-name">First name *</label><input id="first-name" name="firstName" autoComplete="given-name" required /></div>
      <div className="field"><label htmlFor="last-name">Last name *</label><input id="last-name" name="lastName" autoComplete="family-name" required /></div>
      <div className="field"><label htmlFor="volunteer-email">Email *</label><input id="volunteer-email" name="email" type="email" autoComplete="email" required /></div>
      <div className="field"><label htmlFor="pronouns">Preferred pronouns</label><input id="pronouns" name="pronouns" placeholder="e.g. they/them" /></div>
      <fieldset className="field-full fieldset-reset"><legend className="fieldset-label">What are you interested in? *</legend><div className="choice-grid">{opportunities.map((item) => <label key={item}><input type="checkbox" name="interests" value={item} />{item}</label>)}</div></fieldset>
      <div className="field field-full"><label htmlFor="message">Anything you’d like to add?</label><textarea id="message" name="message" /></div>
      <div className="field"><label htmlFor="commitment">Can you volunteer at least three hours each week? *</label><select id="commitment" name="commitment" required defaultValue=""><option value="" disabled>Select one</option><option>Yes</option><option>No</option><option>Not sure yet</option></select></div>
      <div className="field"><label htmlFor="source">How did you hear about us?</label><input id="source" name="source" /></div>
      <label className="check-label"><input type="checkbox" name="newsletter" value="yes" />Also subscribe me to the ShelterTech newsletter</label>
      <div className="form-submit"><button className="button" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Submit application"}</button><p className="form-status" aria-live="polite">{status === "success" && "Thanks. We’ve received your application."}{status === "error" && <>We couldn’t send this form. Email <a href="mailto:info@sheltertech.org">info@sheltertech.org</a>.</>}</p></div>
    </form>
  );
}
