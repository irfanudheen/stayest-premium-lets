import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHead, SectionHeading, IconCard, CTASection } from "@/components/site/ui";
import { Reveal, Counter } from "@/components/site/Reveal";
import meetingImg from "@/assets/meeting.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About STAYEST | UK Company Let Specialists" },
      {
        name: "description",
        content:
          "STAYEST is a UK company let and property management business delivering guaranteed rent, compliance and professional care for landlords and investors.",
      },
      { property: "og:title", content: "About STAYEST | UK Company Let Specialists" },
      {
        property: "og:description",
        content: "Who we are, how we work and why UK landlords partner with STAYEST.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  { icon: "bi-shield-lock", title: "Integrity", text: "Clear agreements, honest advice and no hidden deductions — ever." },
  { icon: "bi-graph-up-arrow", title: "Performance", text: "Operational discipline that protects both your income and your asset." },
  { icon: "bi-people", title: "Partnership", text: "We measure success in years, not tenancies." },
];

function About() {
  return (
    <SiteLayout>
      <PageHead
        eyebrow="About Us"
        title="A UK property partner built for landlords"
        intro="STAYEST provides company let agreements and full property management to private landlords, letting agents, investors, developers and corporate housing partners."
      />

      <section className="section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <Reveal>
                <span className="eyebrow">Our Story</span>
                <h2 className="mb-3">Founded to remove uncertainty from letting</h2>
                <p className="lead-muted">
                  STAYEST was established by property professionals who watched landlords lose
                  returns to voids, arrears and inconsistent management. We built a different model:
                  a corporate tenancy backed by guaranteed monthly rent and an in-house operations
                  team responsible for every aspect of the property.
                </p>
                <p className="lead-muted">
                  Today we manage properties across London, the South East, the Midlands, the North
                  and Scotland — housing relocating professionals, contractors and corporate clients
                  in homes maintained to a consistently high standard.
                </p>
              </Reveal>
            </div>
            <div className="col-lg-6">
              <Reveal delay={100}>
                <img
                  src={meetingImg}
                  alt="The STAYEST landlord team in a client meeting"
                  className="img-fluid rounded-4"
                  loading="lazy"
                  width={1400}
                  height={1000}
                  style={{ boxShadow: "var(--shadow-lift)" }}
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <div className="row g-4 text-center">
            {[
              { v: 850, s: "+", l: "Properties Managed" },
              { v: 24, s: "/7", l: "Operations Support" },
              { v: 98, s: "%", l: "Landlord Retention" },
              { v: 40, s: "+", l: "UK Locations" },
            ].map((s, i) => (
              <div className="col-6 col-lg-3" key={s.l}>
                <Reveal delay={i * 80}>
                  <div className="stat-value">
                    <Counter value={s.v} suffix={s.s} />
                  </div>
                  <div className="stat-label mt-1">{s.l}</div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading eyebrow="Our Values" title="How we work" center />
          <div className="row g-4 mt-2">
            {values.map((v, i) => (
              <div className="col-md-4" key={v.title}>
                <Reveal delay={i * 90}>
                  <IconCard icon={v.icon} title={v.title}>
                    {v.text}
                  </IconCard>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
