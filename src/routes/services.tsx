import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHead, SectionHeading, IconCard, CTASection } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { services, steps } from "@/components/site/content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Property Management Services for UK Landlords | STAYEST" },
      {
        name: "description",
        content:
          "Company let, guaranteed rent, property management, professional cleaning, guest management, maintenance and property setup for UK landlords.",
      },
      { property: "og:title", content: "Property Management Services for UK Landlords | STAYEST" },
      {
        property: "og:description",
        content: "A complete, fully managed property service delivered by an in-house UK team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <PageHead
        eyebrow="Services"
        title="Fully managed property services"
        intro="Seven core services that cover every operational requirement of a professionally let property."
      />

      <section className="section">
        <div className="container">
          <div className="row g-4">
            {services.map((s, i) => (
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

      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Delivery"
            title="How our services come together"
            intro="Each service is a stage of one continuous, documented process."
          />
          <div className="row g-4 mt-2">
            {steps.map((s, i) => (
              <div className="col-md-6 col-lg-4" key={s.title}>
                <Reveal delay={(i % 3) * 80}>
                  <div className="card-premium">
                    <span className="timeline-step position-static d-inline-grid mb-3">{i + 1}</span>
                    <h3 className="h5 mb-2">{s.title}</h3>
                    <p className="lead-muted mb-0" style={{ fontSize: ".97rem" }}>
                      {s.text}
                    </p>
                  </div>
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
