import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHead, SectionHeading, Faq, CTASection } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { faqs } from "@/components/site/content";
import interiorImg from "@/assets/interior.jpg";

export const Route = createFileRoute("/guaranteed-rent")({
  head: () => ({
    meta: [
      { title: "Guaranteed Rent Scheme for UK Landlords | STAYEST" },
      {
        name: "description",
        content:
          "Fixed monthly rent for 3-5 years with no voids, fees or commission. See how the STAYEST guaranteed rent scheme works for UK landlords.",
      },
      { property: "og:title", content: "Guaranteed Rent Scheme for UK Landlords | STAYEST" },
      {
        property: "og:description",
        content: "Guaranteed monthly income, zero void periods and a fully managed property.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GuaranteedRent,
});

const comparison = [
  ["Monthly income", "Guaranteed, fixed date", "Variable, subject to voids"],
  ["Void periods", "Covered by STAYEST", "Landlord absorbs the loss"],
  ["Letting & renewal fees", "None", "Typically 8-15% + VAT"],
  ["Cleaning & consumables", "Included", "Landlord or tenant"],
  ["Maintenance coordination", "Managed in-house", "Ad hoc contractors"],
  ["Inspections", "Routine and documented", "Occasional"],
];

function GuaranteedRent() {
  return (
    <SiteLayout>
      <PageHead
        eyebrow="Guaranteed Rent"
        title="Fixed monthly income, for the whole term"
        intro="Your rent is a contractual obligation — paid on the same date each month whether the property is occupied or not."
      />

      <section className="section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <Reveal>
                <span className="eyebrow">The Model</span>
                <h2 className="mb-3">Predictable returns without management</h2>
                <p className="lead-muted">
                  STAYEST becomes your contractual tenant under a company let agreement. We take on
                  the occupancy risk, the operational workload and the day-to-day care of the
                  property, and you receive a fixed monthly sum for a term of three to five years.
                </p>
                <ul className="list-unstyled d-grid gap-3 mt-4">
                  {[
                    "Rent paid on a fixed date every month",
                    "Zero void periods and no arrears chasing",
                    "No letting, management or renewal fees",
                    "Professional cleaning and minor maintenance included",
                    "Documented inspections throughout the term",
                  ].map((t) => (
                    <li className="d-flex gap-3" key={t}>
                      <i className="bi bi-check2-circle text-gold fs-5" aria-hidden="true" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="col-lg-6">
              <Reveal delay={100}>
                <img
                  src={interiorImg}
                  alt="Managed apartment interior maintained to a professional standard"
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

      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Comparison"
            title="Guaranteed rent vs traditional letting"
            intro="The practical differences landlords notice within the first quarter."
          />
          <Reveal delay={100}>
            <div className="table-responsive mt-4">
              <table className="table align-middle bg-white rounded-4 overflow-hidden mb-0">
                <caption className="visually-hidden">
                  Comparison of STAYEST guaranteed rent and traditional letting
                </caption>
                <thead>
                  <tr>
                    <th scope="col" className="py-3 px-4">Feature</th>
                    <th scope="col" className="py-3 px-4">STAYEST Guaranteed Rent</th>
                    <th scope="col" className="py-3 px-4">Traditional Letting</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row[0]}>
                      <th scope="row" className="py-3 px-4 fw-medium">{row[0]}</th>
                      <td className="py-3 px-4">
                        <i className="bi bi-check2 text-gold me-2" aria-hidden="true" />
                        {row[1]}
                      </td>
                      <td className="py-3 px-4 text-secondary">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <SectionHeading eyebrow="FAQs" title="Guaranteed rent questions" />
            </div>
            <div className="col-lg-7">
              <Reveal delay={100}>
                <Faq items={faqs.slice(0, 4)} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-5">
              <SectionHeading
                eyebrow="Get a Figure"
                title="Request your guaranteed rent offer"
                intro="Share a few property details and receive a written proposal within 48 hours."
              />
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
