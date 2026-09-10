"use client";

import { useEffect, useRef } from "react";
import posthog from "posthog-js";

const campaignPath = "/embed/donation-form/donate-to-change-lives-21445";
const campaignUrl = `https://www.zeffy.com${campaignPath}?utm_source=sheltertech_website`;

export function ZeffyDonationForm() {
  const formShellRef = useRef<HTMLDivElement>(null);
  const hasTrackedView = useRef(false);

  useEffect(() => {
    const formShell = formShellRef.current;
    if (!formShell || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasTrackedView.current) return;

        hasTrackedView.current = true;
        posthog.capture("donation_form_viewed", {
          analytics_source: "sheltertech_website",
          form_provider: "zeffy",
          campaign: "donate-to-change-lives-21445",
        });
        observer.disconnect();
      },
      { threshold: 0.25 },
    );

    observer.observe(formShell);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="zeffy-form-shell" ref={formShellRef}>
      <iframe
        className="zeffy-form-embed"
        title="Donation form powered by Zeffy"
        src={campaignUrl}
        allow="payment"
        onLoad={() => {
          posthog.capture("donation_form_loaded", {
            analytics_source: "sheltertech_website",
            form_provider: "zeffy",
            campaign: "donate-to-change-lives-21445",
          });
        }}
      />
    </div>
  );
}
