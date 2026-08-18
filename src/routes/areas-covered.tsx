import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHead, SectionHeading, CTASection } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { areas } from "@/components/site/content";

export const Route = createFileRoute("/areas-covered")({
  head: () => ({
    meta: [
      { title: "Areas We Cover Across the UK | STAYEST" },
      {
        name: "description",
        content:
          "STAYEST manages company let properties across London, the South East, the Midlands, the North of England and Scotland.",
      },
      { property: "og:title", content: "Areas We Cover Across the UK | STAYEST" },
      {
        property: "og:description",
        content: "Regional coverage and local operations teams across 40+ UK locations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AreasCovered,
});

function AreasCovered() {
  return (
    <SiteLayout>
      <PageHead
        eyebrow="Areas We Cover"
        title="Nationwide coverage, local teams"
        intro="We only operate where corporate demand supports guaranteed rent — so landlords receive realistic figures and dependable service."
      />

      <section className="section">
        <div className="container">
          <div className="row g-4">
            {areas.map((a, i) => (
              <div className="col-md-6" key={a.region}>
                <Reveal delay={(i % 2) * 90}>
                  <div className="card-premium">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <span className="card-icon mb-0">
                        <i className="bi bi-geo-alt" aria-hidden="true" />
                      </span>
                      <h2 className="h5 mb-0">{a.region}</h2>
                    </div>
                    <ul className="row list-unstyled g-2 mb-0 lead-muted" style={{ fontSize: ".97rem" }}>
                      {a.places.map((p) => (
                        <li className="col-6" key={p}>
                          <i className="bi bi-dot text-gold" aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Not Listed?"
            title="We review new locations every quarter"
            intro="If your property sits outside our current coverage, send us the details — we will tell you honestly whether we can deliver, and when."
            center
          />
        </div>
      </section>

      <CTASection title="Check whether we cover your property" />
    </SiteLayout>
  );
}
