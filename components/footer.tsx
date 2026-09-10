import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { NewsletterForm } from "@/components/newsletter-form";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-lead container">
        <div>
          <p className="eyebrow light">Stay connected</p>
          <h2>Good technology starts with community.</h2>
        </div>
        <NewsletterForm />
      </div>
      <div className="footer-grid container">
        <div className="footer-brand">
          <Link className="wordmark wordmark-light" href="/" aria-label="ShelterTech home"><Image src="/brand/sheltertech-logo-white.svg" alt="ShelterTech" width={146} height={44} /></Link>
          <Image className="candid-seal" src="/brand/candid-gold-seal.svg" alt="2026 Candid Platinum Seal of Transparency" width={108} height={108} />
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/volunteer">Volunteer</Link>
          <Link href="/donate" data-donation-cta="footer">Donate</Link>
        </div>
        <div>
          <p className="footer-label">Get in touch</p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <address>{site.address}</address>
          <p>EIN: {site.ein}</p>
          <div className="social-links" aria-label="ShelterTech social media">
            <a href="https://www.instagram.com/sheltertechsf/" target="_blank" rel="noreferrer" aria-label="ShelterTech on Instagram"><InstagramIcon /></a>
            <a href="https://www.facebook.com/ShelterTechOrg/" target="_blank" rel="noreferrer" aria-label="ShelterTech on Facebook"><FacebookIcon /></a>
            <a href="https://www.linkedin.com/company/sheltertech/" target="_blank" rel="noreferrer" aria-label="ShelterTech on LinkedIn"><LinkedInIcon /></a>
          </div>
        </div>
        <div>
          <p className="footer-label">Legal</p>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms-and-conditions">Terms</Link>
          <Link href="/accessibility-statement">Accessibility</Link>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>© {new Date().getFullYear()} ShelterTech. A California 501(c)(3) nonprofit.</p>
        <p>Built for access. Built with care.</p>
      </div>
    </footer>
  );
}
