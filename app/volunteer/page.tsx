import type { Metadata } from "next";
import Image from "next/image";
import { VolunteerForm } from "@/components/volunteer-form";

export const metadata: Metadata = { title: "Volunteer", description: "Volunteer your time and skills with ShelterTech in San Francisco." };

const opportunities = [
  ["Product and technology", "Product managers, designers, data specialists, researchers, and software developers create and maintain services with direct community impact."],
  ["Marketing and events", "Build awareness, support community events, and help more San Franciscans discover the services available to them."],
  ["Fundraising and partnerships", "Develop relationships and fundraising activities that sustain free internet access and reliable service information."],
  ["Board of directors", "Bring diverse networks, community ties, and professional expertise to the governance of ShelterTech."],
];

export default function VolunteerPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-grid container"><div><p className="eyebrow">Volunteer at ShelterTech</p><h1 className="display">Put your skills to work</h1></div><p className="page-hero-copy">Our volunteer community builds the technology and relationships that make digital equity practical in San Francisco.</p></div>
        <div className="page-hero-image container"><Image src="/images/volunteers.jpg" alt="ShelterTech volunteers and community representatives working together at a Datathon" fill priority sizes="(max-width: 1200px) 100vw, 1180px" /></div>
      </section>

      <section className="volunteer-intro"><div className="container"><div className="volunteer-intro-grid"><div><p className="eyebrow light">What volunteers make possible</p><h2 className="section-heading">People power the mission</h2></div><div><p>If you believe digital equity is a human right, there is a place for your experience here. Volunteers work alongside community representatives, nonprofits, government, and local businesses.</p></div></div><div className="volunteer-metrics"><div className="metric"><strong>$2M</strong><span>value of volunteer work</span></div><div className="metric"><strong>560</strong><span>Bay Area volunteers since 2016</span></div><div className="metric"><strong>9,000</strong><span>community members reached</span></div></div></div></section>

      <section className="work-section"><div className="container"><p className="eyebrow">Volunteer opportunities</p><h2 className="section-heading">Where you can help</h2><div className="work-grid">{opportunities.map(([title, copy], index) => <article className="work-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

      <section className="form-section" id="apply"><div className="form-grid container"><div><p className="eyebrow">Apply to volunteer</p><h2 className="section-heading">Tell us where you fit</h2><p>Most roles ask for about three hours each week. We’ll follow up by email to discuss current needs and next steps.</p></div><VolunteerForm /></div></section>
    </>
  );
}
