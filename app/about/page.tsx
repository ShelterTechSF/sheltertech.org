import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "About", description: "Meet the people and values behind ShelterTech's work to close the digital divide." };

const values = [
  ["Collaboration", "We build partnerships that make every part of the work stronger."],
  ["Community", "We elevate the voices and expertise of the people our work is intended to serve."],
  ["Humanity", "We uphold the dignity, needs, and rights of all."],
  ["Inclusivity", "We treat equity and belonging as foundational, not optional."],
  ["Innovation", "We stay practical and resourceful in meeting urgent community needs."],
  ["Integrity", "We embrace responsibility and accountability in our work."],
];

const leadership = [
  { name: "Melissa King", role: "Co-Executive Director", image: "/images/team/melissa.jpg" },
  { name: "Bill Soward", role: "Co-Executive Director", image: "/images/team/bill.jpg" },
  { name: "Renee Barnstone", role: "Chief Financial Officer", image: "/images/team/renee.jpg" },
];

const board = [
  ["Hicham Sabir", "Head of ESG Platforms, Holtara"],
  ["Derek Fidler", "Director UX & Product Strategy, Flatpay"],
  ["Joe Freund", "Sr. Director Platform Engineering, MyVest"],
  ["Melissa King", "COO, Healthspan Action Coalition"],
  ["Amy Kimura Schoemehl", "Sr. VP Head of People, Goodwater"],
  ["Bill Soward", "CEO, Titan Seal"],
  ["Richard Xia", "Software Engineering Manager, SiFive"],
];

const documents = [
  ["2024 audit statement", "/documents/no-audit-december-2024.pdf"],
  ["2023 Form 990", "/documents/form-990-2023.pdf"],
  ["2022 Form 990 — FY 2023", "/documents/form-990-fy-2023.pdf"],
  ["2022 Form 990", "/documents/form-990-2022.pdf"],
  ["IRS 501(c)(3) determination letter", "/documents/irs-determination-letter.pdf"],
  ["California Registry of Charitable Trusts", "https://rct.doj.ca.gov/Verification/Web/Search.aspx?facility=Y"],
  ["Board roles and affiliations", "https://docs.google.com/spreadsheets/d/1dcD-hapydKCz6L-Q2TsIyRU9SSN4arLE5-mRBjVBHxQ/edit?usp=sharing"],
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-grid container">
          <div><p className="eyebrow">About ShelterTech</p><h1 className="display">Built with the community</h1></div>
          <p className="page-hero-copy">We envision a Bay Area where everyone can find and use no-cost human services, regardless of status, income, or circumstance.</p>
        </div>
        <div className="page-hero-image container"><Image src="/images/about-group.jpg" alt="Community representatives and volunteers gathered at an SF Service Guide event" fill priority sizes="(max-width: 1200px) 100vw, 1180px" /></div>
      </section>

      <section className="story-section">
        <div className="story-grid container">
          <div><p className="eyebrow">Our history</p><h2 className="section-heading">Open since 2016</h2></div>
          <div className="story-copy"><p>ShelterTech began with a simple belief: digital equity and connectivity are rights, not privileges. Since 2016, volunteers, community representatives, and partners have built practical tools that help people facing homelessness and housing insecurity move forward.</p><p>We reduce barriers by connecting people to human services, reliable internet access, and opportunities for healthier, more stable lives.</p><div className="values-grid">{values.map(([name, description]) => <div className="value" key={name}><h3>{name}</h3><p>{description}</p></div>)}</div></div>
        </div>
      </section>

      <section className="founder-section">
        <div className="founder-grid container">
          <div className="founder-photo"><Image src="/images/founder.png" alt="ShelterTech founder Darcel Jackson" fill sizes="(max-width: 860px) 100vw, 45vw" /></div>
          <div className="founder-copy"><p className="eyebrow">A note from our founder</p><blockquote>“Living on the streets, I spent most of my time just trying to survive. I had a smartphone and could find WiFi, but there weren’t apps or websites to help me get off the streets. I founded ShelterTech to help bridge this digital divide.”</blockquote><p><strong>Darcel Jackson</strong><br />Founder, ShelterTech</p></div>
        </div>
      </section>

      <section className="people-section">
        <div className="container">
          <div className="people-head"><div><p className="eyebrow">Leadership</p><h2 className="section-heading">People behind the work</h2></div><p className="section-intro">A small operating team coordinates a broad community of volunteers, partners, and people with lived experience.</p></div>
          <div className="team-grid">{leadership.map((person) => <article className="person" key={person.name}><div className="person-photo"><Image src={person.image} alt={person.name} fill sizes="(max-width: 560px) 100vw, 33vw" /></div><h3>{person.name}</h3><p>{person.role}</p></article>)}</div>
        </div>
      </section>

      <section className="governance">
        <div className="container">
          <p className="eyebrow">Governance</p><h2 className="section-heading">Board of directors</h2>
          <div className="board-list">{board.map(([name, role]) => <div key={name}><strong>{name}</strong><br /><span>{role}</span></div>)}</div>
          <div className="document-list"><p className="eyebrow">Financial and governance documents</p>{documents.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>)}</div>
        </div>
      </section>
    </>
  );
}
