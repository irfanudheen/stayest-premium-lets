import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHead } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact STAYEST | Free Landlord Property Assessment" },
      {
        name: "description",
        content:
          "Contact the STAYEST landlord team for a free property assessment and a written guaranteed rent proposal within 48 hours.",
      },
      { property: "og:title", content: "Contact STAYEST | Free Landlord Property Assessment" },
      {
        property: "og:description",
        content: "Speak with a senior landlord advisor about guaranteed rent and company let.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const details = [
  { icon: "bi-telephone", label: "Phone", value: "+44 20 4577 2100", href: "tel:+442045772100" },
  { icon: "bi-envelope", label: "Email", value: "landlords@stayest.co.uk", href: "mailto:landlords@stayest.co.uk" },
  { icon: "bi-geo-alt", label: "Office", value: "128 Aldersgate Street, London EC1A 4JQ" },
  { icon: "bi-clock", label: "Hours", value: "Mon–Fri 9:00–18:00 · Sat 10:00–14:00" },
];

function Contact() {
  return (
    <SiteLayout>
      <PageHead
        eyebrow="Contact"
        title="Speak with our landlord team"
        intro="Tell us about your property and we will respond with a written guaranteed rent proposal within 48 hours."
      />

      <section className="section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <Reveal>
                <h2 className="h4 mb-4">Direct contact</h2>
                <ul className="list-unstyled d-grid gap-4 mb-0">
                  {details.map((d) => (
                    <li className="d-flex gap-3" key={d.label}>
                      <span className="card-icon mb-0" style={{ width: 44, height: 44 }}>
                        <i className={`bi ${d.icon}`} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="d-block small text-secondary">{d.label}</span>
                        {d.href ? (
                          <a href={d.href} className="fw-medium text-decoration-none">
                            {d.value}
                          </a>
                        ) : (
                          <span className="fw-medium">{d.value}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="col-lg-8">
              <Reveal delay={100}>
                <div className="card-premium">
                  <h2 className="h4 mb-1">Property enquiry</h2>
                  <p className="lead-muted mb-4" style={{ fontSize: ".97rem" }}>
                    All fields marked are required. Your details are never shared with third parties.
                  </p>
                  <EnquiryForm />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
