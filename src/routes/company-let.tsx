import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHead, SectionHeading, IconCard, CTASection } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { steps } from "@/components/site/content";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/company-let")({
  head: () => ({
    meta: [
      { title: "Company Let Agreements for Landlords | STAYEST" },
      {
        name: "description",
        content:
          "A company let places STAYEST as your contractual tenant: one agreement, one point of contact, guaranteed rent and professional occupants.",
      },
      { property: "og:title", content: "Company Let Agreements for Landlords | STAYEST" },
      {
        property: "og:description",
        content: "How company let agreements work and why UK landlords choose them.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CompanyLet,
});

const suited = [
  { icon: "bi-person", title: "Private Landlords", text: "One or two properties and no appetite for tenant management." },
  { icon: "bi-briefcase", title: "Letting Agents", text: "A dependable placement for landlords seeking guaranteed income." },
  { icon: "bi-bar-chart", title: "Investors", text: "Portfolio-wide certainty and simplified reporting." },
  { icon: "bi-buildings", title: "Developers", text: "Whole-block agreements that stabilise income from completion." },
  { icon: "bi-globe-europe-africa", title: "Corporate Partners", text: "Consistent, compliant housing stock for relocating staff." },
  { icon: "bi-file-earmark-text", title: "Trusts & SPVs", text: "Clear contractual structures suitable for institutional owners." },
];

function CompanyLet() {
  return (
    <SiteLayout>
      <PageHead
        eyebrow="Company Let"
        title="One contract. One tenant. Zero management."
        intro="Under a company let, STAYEST — not an individual — is your legal tenant, taking full responsibility for the rent, the occupants and the property."
      />

      <section className="section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <Reveal>
                <img
                  src={heroImg}
                  alt="Modern UK apartment building let on a company let agreement"
                  className="img-fluid rounded-4"
                  loading="lazy"
                  width={1600}
                  height={1008}
                  style={{ boxShadow: "var(--shadow-lift)" }}
                />
              </Reveal>
            </div>
            <div className="col-lg-6">
              <Reveal delay={100}>
                <span className="eyebrow">What It Means</span>
                <h2 className="mb-3">A corporate tenancy, professionally run</h2>
                <p className="lead-muted">
                  The agreement sits between you and STAYEST as a business. We house vetted
                  professional occupants, maintain the property to a documented standard and remain
                  fully accountable for its condition and the monthly rent.
                </p>
                <ul className="list-unstyled d-grid gap-3 mt-4">
                  {[
                    "A single, transparent agreement — no tenant turnover admin",
                    "Referenced, insured and professionally managed occupants",
                    "Terms of three to five years with extension options",
                    "Property returned in agreed condition, evidenced by inventory",
                  ].map((t) => (
                    <li className="d-flex gap-3" key={t}>
                      <i className="bi bi-check2-circle text-gold fs-5" aria-hidden="true" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading eyebrow="Who It Suits" title="Built for professional property owners" center />
          <div className="row g-4 mt-2">
            {suited.map((s, i) => (
              <div className="col-sm-6 col-lg-4" key={s.title}>
                <Reveal delay={(i % 3) * 90}>
                  <IconCard icon={s.icon} title={s.title}>
                    {s.text}
                  </IconCard>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Process" title="From first call to guaranteed rent" />
          <div className="timeline mt-5">
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
      </section>

      <CTASection />
    </SiteLayout>
  );
}
