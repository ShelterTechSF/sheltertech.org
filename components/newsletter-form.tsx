"use client";

import { FormEvent, useState } from "react";
import posthog from "posthog-js";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, formType: "newsletter" }) });
    setStatus(response.ok ? "success" : "error");
    if (response.ok) {
      posthog.capture("newsletter_subscription_completed", { form_location: "footer" });
      form.reset();
    }
  }

  return (
    <form className="newsletter-form" onSubmit={submit}>
      <div className="sr-only" aria-hidden="true"><label htmlFor="newsletter-website">Website</label><input id="newsletter-website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <label htmlFor="newsletter-email">Email address</label>
      <div>
        <input id="newsletter-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Subscribe"}</button>
      </div>
      <p className="form-status" aria-live="polite">
        {status === "success" && "Thanks. You’re on the list."}
        {status === "error" && <>We couldn’t subscribe you. Email <a href="mailto:info@sheltertech.org">info@sheltertech.org</a>.</>}
      </p>
    </form>
  );
}
