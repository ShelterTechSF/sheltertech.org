import type { Metadata } from "next";
import { ArrowIcon } from "@/components/icons";
import { ZeffyDonationForm } from "@/components/zeffy-donation-form";

export const metadata: Metadata = { title: "Donate", description: "Support ShelterTech's work to close the digital divide in San Francisco." };

export default function DonatePage() {
  return (
    <div className="donate-page">
      <section className="donate-hero">
        <div className="donate-grid container">
          <div><p className="eyebrow light">Support ShelterTech</p><h1 className="display">Help end the digital divide</h1><p className="donate-copy">Your gift helps people get online, find reliable human services, and shape the tools intended to serve their community. ShelterTech is a tax-exempt 501(c)(3) nonprofit; EIN 38-3984099.</p></div>
          <aside className="donate-panel"><h2>What your support can do</h2><div className="amounts"><div><strong>$40</strong><span>Pays a Community Representative for time at a Datathon.</span></div><div><strong>$150</strong><span>Funds free WiFi for one shelter bed for five years.</span></div><div><strong>$500</strong><span>Funds food and participation costs for a full Datathon.</span></div><div><strong>$12K</strong><span>Connects a building with high-speed internet for five years.</span></div></div><a className="button" href="#donate-securely" data-donation-cta="donate_hero">Donate securely<ArrowIcon /></a></aside>
        </div>
      </section>
      <section className="donation-form-section" id="donate-securely">
        <div className="donation-form-wrap container">
          <div className="donation-form-intro">
            <p className="eyebrow">One-time or monthly</p>
            <h2 className="section-heading">Make your gift</h2>
            <p>Choose a one-time or recurring donation below. Payments and receipts are securely handled by Zeffy.</p>
          </div>
          <ZeffyDonationForm />
        </div>
      </section>
    </div>
  );
}
