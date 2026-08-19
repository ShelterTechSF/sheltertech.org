import posthog from "posthog-js";

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN ?? "phc_yQr3xV9WzX3K86J5hpqn7o6YhHyqP6BmRd5oGWnGKVAq";
const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

type ContactType = "donation" | "partner" | "general";

function contactTypeFor(href: string): ContactType {
  const normalizedHref = href.toLowerCase();

  if (window.location.pathname === "/donate" || normalizedHref.includes("donation") || normalizedHref.includes("donate")) {
    return "donation";
  }

  if (normalizedHref.includes("partnering") || normalizedHref.includes("partner")) {
    return "partner";
  }

  return "general";
}

function linkLabel(link: HTMLAnchorElement) {
  return link.textContent?.replace(/\s+/g, " ").trim().slice(0, 80) || "Unlabeled link";
}

try {
  posthog.init(projectToken, {
    api_host: apiHost,
    defaults: "2026-05-30",
    persistence: "localStorage",
    person_profiles: "never",
    respect_dnt: true,
    autocapture: false,
    capture_pageview: "history_change",
    capture_pageleave: true,
    disable_capture_url_hashes: true,
    disable_session_recording: true,
    capture_heatmaps: false,
    capture_dead_clicks: false,
    capture_exceptions: false,
    rageclick: false,
    advanced_disable_feature_flags: true,
    mask_all_text: true,
    mask_all_element_attributes: true,
  });

  document.addEventListener(
    "click",
    (event) => {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      let destination: URL;
      try {
        destination = new URL(href, window.location.href);
      } catch {
        return;
      }

      const eventProperties = {
        page_path: window.location.pathname,
        link_label: linkLabel(link),
      };

      const donationCtaLocation = link.dataset.donationCta;
      const linksToDonatePage = destination.origin === window.location.origin && destination.pathname === "/donate";
      const linksToDonationForm = linksToDonatePage && destination.hash === "#donate-securely";

      if (linksToDonatePage || donationCtaLocation) {
        posthog.capture("donation_cta_clicked", {
          ...eventProperties,
          analytics_source: "sheltertech_website",
          cta_location: donationCtaLocation ?? "site_link",
          destination: linksToDonationForm ? "donation_form" : "donate_page",
        });
      }

      if (destination.protocol === "mailto:") {
        posthog.capture("contact_mailto_clicked", {
          ...eventProperties,
          contact_type: contactTypeFor(href),
        });
      }
    },
    { capture: true },
  );
} catch {
  // Analytics must never prevent the website from loading or responding.
}
