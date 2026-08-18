import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal, Counter } from "@/components/site/Reveal";
import { SectionHeading, IconCard, Faq, CTASection } from "@/components/site/ui";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { benefits, services, steps, areas, testimonials, faqs, SITE_URL } from "@/components/site/content";
import heroImg from "@/assets/hero.jpg";
import meetingImg from "@/assets/meeting.jpg";
import interiorImg from "@/assets/interior.jpg";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "STAYEST",
  description:
    "UK company let and property management specialists providing guaranteed rent and fully managed property services for landlords, agents and investors.",
  url: SITE_URL,
  telephone: "+44 20 4577 2100",
  email: "landlords@stayest.co.uk",
  areaServed: "United Kingdom",
  address: {
    "@type": "PostalAddress",
    streetAddress: "128 Aldersgate Street",
    addressLocality: "London",
    postalCode: "EC1A 4JQ",
    addressCountry: "GB",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guaranteed Rent & Company Let Management UK | STAYEST" },
      {
        name: "description",
        content:
          "STAYEST offers UK landlords guaranteed monthly rent, company let agreements and fully managed property services. Book a free property assessment today.",
      },
      { property: "og:title", content: "Guaranteed Rent & Company Let Management UK | STAYEST" },
      {
        property: "og:description",
        content:
          "Guaranteed monthly rent, professional property management and long-term partnerships for UK landlords, agents and investors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(structuredData) },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* ---------------- Hero ---------------- */}
      <section className="hero">
        <div className="hero-media">
          <img src={heroImg} alt="Premium managed apartment building in the UK at dusk" width={1600} height={1008} />
        </div>
        <div className="container hero-inner">
          <div className="row">
            <div className="col-lg-8">
              <Reveal>
                <span className="eyebrow">UK Company Let &amp; Property Management</span>
                <h1>
                  Guaranteed Rent.
                  <br />
                  Professional Property Management.
                  <br />
                  <span className="text-gold">Long-Term Partnerships.</span>
                </h1>
                <p className="hero-sub mt-4">
                  Helping landlords maximise returns through professional company let solutions and
                  guaranteed monthly income.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                  <Link to="/contact" className="btn btn-gold">
                    Get Free Property Assessment
                  </Link>
                  <Link to="/contact" className="btn btn-outline-light-gold">
                    Contact Us
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={150}>
            <div className="row g-4 mt-5 pt-4 border-top" style={{ borderColor: "rgba(255,255,255,.16)" }}>
              {[
                { v: 850, s: "+", l: "Properties Managed" },
                { v: 12, s: " yrs", l: "Sector Experience" },
                { v: 0, s: "", l: "Void Periods for Landlords" },
                { v: 98, s: "%", l: "Landlord Retention" },
              ].map((s) => (
                <div className="col-6 col-lg-3" key={s.l}>
                  <div className="stat-value">
                    <Counter value={s.v} suffix={s.s} />
                  </div>
                  <div className="stat-label mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Benefits ---------------- */}
      <section className="section" id="benefits">
        <div className="container">
          <SectionHeading
            eyebrow="Landlord Benefits"
            title="Certainty, care and returns you can plan around"
            intro="We remove the operational burden of letting while protecting the long-term value of your asset."
          />
          <div className="row g-4 mt-2">
            {benefits.map((b, i) => (
              <div className="col-sm-6 col-lg-3" key={b.title}>
                <Reveal delay={(i % 4) * 80}>
                  <IconCard icon={b.icon} title={b.title}>
                    {b.text}
                  </IconCard>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Services ---------------- */}
      <section className="section section-muted" id="services">
        <div className="container">
          <SectionHeading
            eyebrow="Our Services"
            title="A complete, fully managed service"
            intro="Everything required to let, run and maintain a property to a professional corporate standard."
          />
          <div className="row g-4 mt-2">
            {services.map((s, i) => (
              <div className="col-sm-6 col-lg-4" key={s.title}>
                <Reveal delay={(i % 3) * 90}>
                  <IconCard icon={s.icon} title={s.title}>
                    {s.text}
                  </IconCard>
                </Reveal>
              </div>
            ))}
            <div className="col-sm-6 col-lg-4">
              <Reveal delay={90}>
                <div className="card-premium d-flex flex-column justify-content-between" style={{ background: "var(--navy)" }}>
                  <div>
                    <h3 className="h5 text-white">Need a tailored arrangement?</h3>
                    <p className="mb-4" style={{ color: "rgba(255,255,255,.72)", fontSize: ".97rem" }}>
                      Blocks, new developments and portfolios are structured individually.
                    </p>
                  </div>
                  <Link to="/services" className="btn btn-gold align-self-start">
                    Explore Services
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Why choose us ---------------- */}
      <section className="section" id="why-choose-us">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <Reveal>
                <img
                  src={meetingImg}
                  alt="STAYEST property managers meeting a landlord in a modern office"
                  className="img-fluid rounded-4"
                  loading="lazy"
                  width={1400}
                  height={1000}
                  style={{ boxShadow: "var(--shadow-lift)" }}
                />
              </Reveal>
            </div>
            <div className="col-lg-6">
              <Reveal delay={100}>
                <span className="eyebrow">Why Choose Us</span>
                <h2 className="mb-3">A property partner, not just a tenant</h2>
                <p className="lead-muted">
                  STAYEST is built around one principle: landlords should receive predictable income
                  without managing anything. Our in-house operations team, corporate demand pipeline
                  and transparent reporting make that possible.
                </p>
                <ul className="list-unstyled d-grid gap-3 mt-4 mb-4">
                  {[
                    "Rent paid on a fixed date, every single month",
                    "No letting fees, commission or renewal charges",
                    "Named account manager and documented inspections",
                    "Compliance managed and evidenced throughout the term",
                    "Professional cleaning and maintenance included",
                  ].map((t) => (
                    <li className="d-flex gap-3" key={t}>
                      <i className="bi bi-check2-circle text-gold fs-5" aria-hidden="true" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/about" className="btn btn-outline-navy">
                  About STAYEST
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- How it works ---------------- */}
      <section className="section section-muted" id="how-it-works">
        <div className="container">
          <SectionHeading
            eyebrow="How It Works"
            title="Six clear steps from enquiry to guaranteed rent"
            intro="A transparent process, typically completed within two to three weeks."
          />
          <div className="row g-5 mt-2 align-items-start">
            <div className="col-lg-7">
              <div className="timeline">
                {steps.map((s, i) => (
                  <Reveal key={s.title} delay={i * 60}>
                    <div className="timeline-item">
                      <span className="timeline-step">{i + 1}</span>
                      <h3 className="h5 mb-2">{s.title}</h3>
                      <p className="lead-muted mb-0" style={{ fontSize: ".97rem" }}>
                        {s.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="col-lg-5">
              <Reveal delay={120}>
                <img
                  src={interiorImg}
                  alt="Professionally furnished managed apartment interior"
                  className="img-fluid rounded-4"
                  loading="lazy"
                  width={1400}
                  height={1000}
                  style={{ boxShadow: "var(--shadow-soft)" }}
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Areas covered ---------------- */}
      <section className="section" id="areas">
        <div className="container">
          <SectionHeading
            eyebrow="Areas We Cover"
            title="Operating across the United Kingdom"
            intro="Strong corporate demand in every region we serve, with local teams on the ground."
          />
          <div className="row g-4 mt-2">
            {areas.map((a, i) => (
              <div className="col-sm-6 col-lg-3" key={a.region}>
                <Reveal delay={i * 80}>
                  <div className="card-premium">
                    <h3 className="h6 text-uppercase" style={{ letterSpacing: ".12em" }}>
                      {a.region}
                    </h3>
                    <hr className="rule my-3" />
                    <ul className="list-unstyled mb-0 d-grid gap-2 lead-muted" style={{ fontSize: ".95rem" }}>
                      {a.places.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Testimonials ---------------- */}
      <section className="section section-navy">
        <div className="container">
          <SectionHeading eyebrow="Testimonials" title="Trusted by landlords and agents" center />
          <div className="row g-4 mt-2">
            {testimonials.map((t, i) => (
              <div className="col-lg-4" key={t.name}>
                <Reveal delay={i * 100}>
                  <figure className="card-glass h-100 mb-0">
                    <i className="bi bi-quote fs-2 text-gold" aria-hidden="true" />
                    <blockquote className="mb-4 mt-2">
                      <p className="mb-0" style={{ color: "rgba(255,255,255,.86)" }}>
                        {t.quote}
                      </p>
                    </blockquote>
                    <figcaption>
                      <span className="d-block text-white fw-semibold">{t.name}</span>
                      <span className="small" style={{ color: "rgba(255,255,255,.6)" }}>
                        {t.role}
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="section" id="faqs">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <SectionHeading
                eyebrow="FAQs"
                title="Landlord questions, answered"
                intro="Still unsure? Speak with our landlord team directly."
              />
              <Link to="/contact" className="btn btn-outline-navy mt-4">
                Ask a Question
              </Link>
            </div>
            <div className="col-lg-8">
              <Reveal delay={100}>
                <Faq items={faqs} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Assessment form ---------------- */}
      <section className="section section-muted" id="assessment">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-5">
              <SectionHeading
                eyebrow="Free Property Assessment"
                title="Find out what your property could earn"
                intro="Tell us about your property and we will return a written guaranteed rent proposal within 48 hours."
              />
              <ul className="list-unstyled d-grid gap-3 mt-4">
                {["No obligation and no fees", "Confidential and handled by a senior advisor", "Portfolios and blocks welcome"].map((t) => (
                  <li className="d-flex gap-3" key={t}>
                    <i className="bi bi-check2-circle text-gold fs-5" aria-hidden="true" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-7">
              <Reveal delay={100}>
                <div className="card-premium">
                  <EnquiryForm />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
