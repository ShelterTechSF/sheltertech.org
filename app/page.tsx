import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

const metrics = [
  ["24", "ShelterConnect installations"],
  ["16,000", "monthly users"],
  ["150,000", "annual users"],
  ["3,000+", "human services listed"],
];

const partners = [
  ["City of San Francisco Mayor’s Office of Housing and Community Development", "/partners/MOHCD.png"],
  ["Justice & Diversity Center", "/partners/justice-and-diversity-center-logo-5ac138fdcb9607e092fefa82a0ae33c9.png"],
  ["Compass Family Services", "/partners/compass.png"],
  ["Larkin Street Youth Services", "/partners/larkinstreet.png"],
  ["Benetech", "/partners/benetech.png"],
  ["Cisco", "/partners/cisco.png"],
  ["Code Tenderloin", "/partners/codetenderloin.png"],
  ["Code for San Francisco", "/partners/codeforSF.png"],
  ["Monkeybrains", "/partners/monkeyrains.png"],
  ["PagerDuty", "/partners/pagerduty.png"],
  ["Bridge SF", "/partners/bridgeSF.png"],
  ["Professional Computer Support", "/partners/PCS.png"],
  ["UCSF Acute Care Innovation Center", "/partners/UCSF.png"],
  ["GSMA", "/partners/GSMA.png"],
  ["Eviction Defense Collaborative", "/partners/eviction-defense-logo-19da698124a2fe4b04957e6851e0b9bc.png"],
  ["Home-SF", "/partners/home-sf-logo.png"],
  ["Homeownership SF", "/partners/homeownership-sf-logo-2e38149e5ca665f71e65ae2e7d109b5c.png"],
  ["Link-SF", "/partners/link-sf.png"],
  ["Our 415", "/partners/our415.png"],
  ["Uber", "/partners/uber.png"],
];

const testimonials = [
  {
    name: "Gayle Roberts",
    role: "Chief Development Officer, Larkin Street Youth Services",
    image: "/images/testimonials/gayle-roberts.png",
    quote: "Wi-fi has been a top request among young people here at Larkin Street. Now that we have it with ShelterTech we are seeing more young people come in and stay around and get the things they need so that they can move past homelessness, permanently.",
  },
  {
    name: "Julie Rosenthal",
    role: "Director of Social Services, Homeless Advocacy Project",
    image: "/images/testimonials/julie-rosenthal.png",
    quote: "There’s an overwhelming number of resources for the [at-risk] populations that live here and it’s important to have a place where they can go where they know all the information is accurate, up-to-date, and consistent with what their understanding has been of that particular resource. And if there are any changes that need to be made those will be reflected.",
  },
  {
    name: "Barry Roeder",
    role: "Mayor’s Office of Housing and Community Development",
    image: "/images/testimonials/barry-roeder.webp",
    quote: "We’ve heard from San Franciscans, including as part of our recent strategic planning community outreach that it’s hard to know where to go when you’re looking for supportive services. It’s hard to know where to start, and hard to navigate different resources to find accurate information. We’re glad to be supporting ShelterTech and the broader community to build SF Service Guide – a one-stop, reliable place to help connect residents to the services they need.",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <Image className="home-hero-image" src="/images/hero.jpg" alt="A community member using a mobile phone in San Francisco" fill priority sizes="100vw" />
        <div className="hero-content container">
          <p className="hero-kicker">Technology for human connection</p>
          <h1 className="display">Connecting people in need</h1>
          <div className="hero-bottom">
            <p>We build technology that connects community members to human services and opportunities for happier, healthier lives.</p>
            <Link className="button button-yellow" href="/donate" data-donation-cta="home_hero">Donate to ShelterTech <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="intro-band">
        <div className="intro-grid container">
          <p className="eyebrow">Unlocking opportunity</p>
          <div>
            <h2>Digital access is a right, not a privilege.</h2>
            <p className="intro-copy">Together with the City of San Francisco, community partners, volunteers, and people with lived experience of homelessness, we reduce the barriers that keep people from getting online and finding the resources they need.</p>
            <Link className="text-link" href="/about">Meet ShelterTech <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="programs-home">
        <div className="container">
          <div className="programs-head">
            <div><p className="eyebrow light">Our programs</p><h2 className="section-heading">Access where it matters most</h2></div>
            <p>Three community-led programs turn technology into a practical path to services, stability, and opportunity.</p>
          </div>
          <div className="program-stack">
            <Link className="program-row" href="/programs#service-guide"><span className="program-number">01</span><h3>SF Service Guide</h3><p>Accurate, guided pathways to thousands of human services.</p></Link>
            <Link className="program-row" href="/programs#shelter-connect"><span className="program-number">02</span><h3>ShelterConnect</h3><p>Free high-speed internet in shelters and supportive housing.</p></Link>
            <Link className="program-row" href="/programs#community-reps"><span className="program-number">03</span><h3>Community Reps</h3><p>Solutions shaped by people with lived experience.</p></Link>
          </div>
        </div>
      </section>

      <section className="impact-home">
        <div className="impact-image"><Image src="/images/impact.jpg" alt="A volunteer and community representative reviewing the SF Service Guide at a Datathon" fill sizes="(max-width: 860px) 100vw, 50vw" /></div>
        <div className="impact-copy">
          <p className="eyebrow">Our impact so far</p>
          <h2 className="section-heading">Useful tools. Real reach.</h2>
          <p>Every installation, listing, and visit represents a person with a clearer path to what they need.</p>
          <div className="metrics">{metrics.map(([value, label]) => <div className="metric" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
        </div>
      </section>

      <section className="quote-section">
        <div className="container">
          <span className="quote-mark" aria-hidden="true">“</span>
          <blockquote>The SF Service Guide turned into my case manager.</blockquote>
          <cite>SR <span>Disabled veteran who experienced homelessness and now has his own apartment</span></cite>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-head"><div><p className="eyebrow">Voices from the community</p><h2 className="section-heading">What access changes</h2></div><p className="section-intro">Partners and service providers see the difference when reliable information and internet access become part of the support people receive.</p></div>
          <div className="testimonial-list">
            {testimonials.map((testimonial, index) => (
              <article className="testimonial-row" key={testimonial.name}>
                <span className="testimonial-index">0{index + 1}</span>
                <div className="testimonial-portrait"><Image src={testimonial.image} alt={testimonial.name} fill sizes="(max-width: 860px) 140px, 220px" /></div>
                <div className="testimonial-copy"><span className="testimonial-mark" aria-hidden="true">“</span><blockquote>{testimonial.quote}</blockquote><cite><strong>{testimonial.name}</strong><span>{testimonial.role}</span></cite></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stories-section">
        <div className="container">
          <div className="stories-head"><div><p className="eyebrow">Stories from the work</p><h2 className="section-heading">See access in action</h2></div><p className="section-intro">Hear from community members, volunteers, and partners about what digital access changes in a person’s day-to-day life.</p></div>
          <div className="video-grid">
            <article className="video-story"><video controls preload="metadata" poster="/images/video-sheltertech-story.jpg"><source src="/videos/sheltertech-story.mp4" type="video/mp4" />Your browser does not support embedded video.</video><div><p className="video-meta">ShelterTech film · 9:38</p><h3>Connecting people to opportunity</h3><p>The people behind ShelterConnect and SF Service Guide explain how the programs work and why reliable access matters.</p></div></article>
            <article className="video-story"><video controls preload="metadata" poster="/images/video-digital-inclusion.jpg"><source src="/videos/digital-inclusion.mp4" type="video/mp4" />Your browser does not support embedded video.</video><div><p className="video-meta">ShelterTech × GSMA · 6:20</p><h3>Accelerating digital inclusion</h3><p>A closer look at mobile-led solutions for people experiencing homelessness, created with GSMA.</p></div></article>
          </div>
        </div>
      </section>

      <section className="partners">
        <div className="container">
          <div className="partner-head"><div><p className="eyebrow">Partners and sponsors</p><h2 className="section-heading">The work is shared</h2></div><a className="text-link" href="mailto:info@sheltertech.org?subject=Partnering%20with%20ShelterTech">Become a partner <ArrowIcon /></a></div>
          <div className="partner-list">{partners.map(([name, image]) => <div key={name}><Image src={image} alt={name} width={206} height={80} sizes="(max-width: 560px) 50vw, 25vw" /></div>)}</div>
        </div>
      </section>

      <section className="contribute">
        <div className="contribute-grid container">
          <div><p className="eyebrow light">How you can contribute</p><h2 className="section-heading">Help close the digital divide</h2></div>
          <div className="action-list">
            <div className="action-item"><span>01</span><div><h3>Donate</h3><p>Fund free internet, accurate service information, and paid community insight.</p><Link className="text-link" href="/donate" data-donation-cta="home_action">Support the work <ArrowIcon /></Link></div></div>
            <div className="action-item"><span>02</span><div><h3>Partner</h3><p>Join companies, nonprofits, and local government working to connect the community.</p><a className="text-link" href="mailto:info@sheltertech.org?subject=Partnering%20with%20ShelterTech">Start a conversation <ArrowIcon /></a></div></div>
            <div className="action-item"><span>03</span><div><h3>Volunteer</h3><p>Put your product, technology, research, communications, or fundraising skills to work.</p><Link className="text-link" href="/volunteer">See opportunities <ArrowIcon /></Link></div></div>
          </div>
        </div>
      </section>
    </>
  );
}
