import type { Metadata } from "next";

export const metadata: Metadata = { title: "Accessibility statement" };

export default function AccessibilityPage() {
  return <article className="legal-page"><div className="legal-wrap container"><p className="eyebrow">Our commitment</p><h1 className="display">Accessibility</h1><p>ShelterTech believes access to information and technology is a right. We aim to make this website usable by people with a broad range of abilities, devices, and assistive technologies.</p><h2>What we do</h2><ul><li>Use semantic structure, descriptive links, and meaningful image descriptions.</li><li>Support keyboard navigation and visible focus indicators.</li><li>Maintain readable contrast, responsive text, and reduced-motion preferences.</li><li>Test key pages at common mobile and desktop sizes.</li></ul><h2>Need help or found a barrier?</h2><p>If any part of this website is difficult to use, email <a className="text-link" href="mailto:info@sheltertech.org?subject=Website%20accessibility">info@sheltertech.org</a>. Tell us the page and what you were trying to do. We will respond and provide the information in another format when possible.</p></div></article>;
}
