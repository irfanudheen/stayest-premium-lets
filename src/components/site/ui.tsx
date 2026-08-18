import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <header className="page-head">
      <div className="container">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="mt-3 mb-0 fs-5">{intro}</p>
        </Reveal>
      </div>
    </header>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "text-center mx-auto" : ""}>
      <div style={{ maxWidth: center ? "44rem" : "40rem" }} className={center ? "mx-auto" : ""}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mb-3">{title}</h2>
        {intro ? <p className="lead-muted mb-0">{intro}</p> : null}
      </div>
    </Reveal>
  );
}

export function IconCard({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="card-premium">
      <div className="card-icon">
        <i className={`bi ${icon}`} aria-hidden="true" />
      </div>
      <h3 className="h5 mb-2">{title}</h3>
      <p className="mb-0 lead-muted" style={{ fontSize: ".97rem" }}>
        {children}
      </p>
    </article>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="accordion-flush">
      {items.map((item, i) => {
        const expanded = open === i;
        return (
          <div className="accordion-item" key={item.q}>
            <h3 className="mb-0">
              <button
                className="faq-btn"
                aria-expanded={expanded}
                aria-controls={`faq-panel-${i}`}
                id={`faq-btn-${i}`}
                onClick={() => setOpen(expanded ? null : i)}
              >
                <span>{item.q}</span>
                <i
                  className={`bi ${expanded ? "bi-dash-lg" : "bi-plus-lg"} text-gold`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            {expanded ? (
              <div className="faq-panel" id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`}>
                {item.a}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export function CTASection({
  title = "Ready to secure guaranteed monthly rent?",
  text = "Book a free, no-obligation property assessment. We will review your property, rental potential and provide a written proposal within 48 hours.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section section-navy">
      <div className="container">
        <Reveal>
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span className="eyebrow">Landlord Enquiries</span>
              <h2 className="mb-3">{title}</h2>
              <p className="lead-muted mb-0">{text}</p>
            </div>
            <div className="col-lg-4 d-flex flex-column flex-sm-row flex-lg-column gap-3 justify-content-lg-end">
              <Link to="/contact" className="btn btn-gold w-100">
                Get Free Property Assessment
              </Link>
              <a href="tel:+442045772100" className="btn btn-outline-light-gold w-100">
                <i className="bi bi-telephone me-2" aria-hidden="true" />
                +44 20 4577 2100
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
