import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, GuideIcon, PeopleIcon, WifiIcon } from "@/components/icons";

export const metadata: Metadata = { title: "Programs", description: "Explore SF Service Guide, ShelterConnect, and ShelterTech's Community Representative program." };

export default function ProgramsPage() {
  return (
    <div className="programs-page">
      <section className="page-hero">
        <div className="page-hero-grid container">
          <div><p className="eyebrow">Our programs</p><h1 className="display">Three ways to expand access</h1></div>
          <p className="page-hero-copy">Technology works best when access, accurate information, and community expertise move together.</p>
        </div>
      </section>

      <section className="program-feature" id="service-guide">
        <div className="program-feature-image"><Image src="/images/sf-service-guide.jpg" alt="ShelterTech volunteers gathered at the Cisco Datathon" fill priority sizes="(max-width: 860px) 100vw, 50vw" /></div>
        <div className="program-feature-copy"><div className="program-glyph"><GuideIcon /></div><p className="eyebrow">01 / Find services</p><h2>SF Service Guide</h2><p>Launched in 2019, SF Service Guide is an online directory that helps more than 16,000 people each month navigate food, shelter, job training, mental healthcare, and other critical services.</p><p>We work with government, nonprofit partners, volunteers, and service providers to keep thousands of listings accurate and useful.</p><a className="button button-yellow" href="https://www.sfserviceguide.org/" target="_blank" rel="noreferrer">Visit SF Service Guide <ArrowIcon /></a><p className="funding-note">Approximately $200,000 a year maintains and expands the guide.</p></div>
      </section>

      <section className="program-feature" id="shelter-connect">
        <div className="program-feature-image shelterconnect-feature-image"><Image src="/images/shelterconnect-community.png" alt="Three community members spending time together at a ShelterConnect location" fill sizes="(max-width: 860px) 100vw, 50vw" /></div>
        <div className="program-feature-copy"><div className="program-glyph"><WifiIcon /></div><p className="eyebrow light">02 / Get connected</p><h2>Shelter<wbr />Connect</h2><p>ShelterConnect brings free WiFi and high-speed internet to temporary shelters, resource centers, single-room occupancy buildings, and permanent supportive housing.</p><p>Every installation is funded by donors and in-kind partners, connecting entire buildings for years—not days.</p><Link className="button button-blue" href="/donate" data-donation-cta="programs_shelterconnect">Fund internet access <ArrowIcon /></Link><p className="funding-note">$12,000 can connect a building for five years.</p></div>
      </section>

      <section className="program-feature" id="community-reps">
        <div className="program-feature-image"><Image src="/images/community-reps.jpg" alt="ShelterTech Community Representatives meeting together" fill sizes="(max-width: 860px) 100vw, 50vw" /></div>
        <div className="program-feature-copy"><div className="program-glyph"><PeopleIcon /></div><p className="eyebrow">03 / Build together</p><h2 className="program-title-long">Community Representatives</h2><p>Our Community Representatives have experienced homelessness and other forms of insecurity. They build awareness, work alongside volunteers, and provide essential insight into every program and product.</p><p>Their paid expertise keeps ShelterTech accountable to the people our work is designed to serve.</p><Link className="button button-blue" href="/volunteer">Work alongside the community <ArrowIcon /></Link><p className="funding-note">Approximately $30,000 a year runs the program at full strength.</p></div>
      </section>

      <section className="connect-map-section">
        <div className="connect-map-copy container"><div><p className="eyebrow">ShelterConnect locations</p><h2 className="section-heading">A growing network across San Francisco</h2></div><p>Installations bring durable, free internet access to shelters, resource centers, and supportive housing across the city. The map reflects ShelterConnect’s 2019 network and planned sites.</p></div>
        <div className="connect-map container"><Image src="/images/shelterconnect-map.png" alt="Map of ShelterConnect installations and planned sites across San Francisco" width={2950} height={2528} sizes="(max-width: 860px) calc(150vw - 48px), 1500px" /></div>
      </section>
    </div>
  );
}
