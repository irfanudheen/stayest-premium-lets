import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHead, CTASection } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { posts } from "@/components/site/content";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Landlord Insights & Property Guides | STAYEST Blog" },
      {
        name: "description",
        content:
          "Guides on guaranteed rent, company let agreements, compliance and maximising returns for UK landlords, investors and developers.",
      },
      { property: "og:title", content: "Landlord Insights & Property Guides | STAYEST Blog" },
      {
        property: "og:description",
        content: "Practical articles for UK landlords on rent, compliance and property management.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <SiteLayout>
      <PageHead
        eyebrow="Resource Centre"
        title="Landlord insights and guides"
        intro="Clear, practical thinking on guaranteed rent, compliance and long-term property performance."
      />

      <section className="section">
        <div className="container">
          <div className="row g-4">
            {posts.map((p, i) => (
              <div className="col-md-6 col-lg-4" key={p.title}>
                <Reveal delay={(i % 3) * 90}>
                  <article className="card-premium d-flex flex-column">
                    <span className="eyebrow mb-3">{p.category}</span>
                    <h2 className="h5 mb-3">{p.title}</h2>
                    <p className="lead-muted flex-grow-1" style={{ fontSize: ".97rem" }}>
                      {p.excerpt}
                    </p>
                    <div className="d-flex justify-content-between align-items-center small text-secondary pt-3 border-top">
                      <time>{p.date}</time>
                      <span>{p.read}</span>
                    </div>
                  </article>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Prefer to speak with a specialist?" />
    </SiteLayout>
  );
}
