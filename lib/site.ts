export const site = {
  name: "ShelterTech",
  url: "https://www.sheltertech.org",
  email: "info@sheltertech.org",
  address: "268 Bush Street #4302, San Francisco, CA 94104",
  ein: "38-3984099",
};

export const navItems = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/volunteer", label: "Volunteer" },
];

export const donationUrl = process.env.NEXT_PUBLIC_DONATION_URL || "/donate";
