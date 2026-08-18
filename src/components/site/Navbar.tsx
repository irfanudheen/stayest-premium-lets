import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Guaranteed Rent", to: "/guaranteed-rent" },
  { label: "Company Let", to: "/company-let" },
  { label: "Why Choose Us", to: "/", hash: "why-choose-us" },
  { label: "Areas We Cover", to: "/areas-covered" },
  { label: "FAQs", to: "/", hash: "faqs" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link to="/" className={`brand-mark ${dark ? "navbar-dark-brand" : ""}`} aria-label="STAYEST home">
      <span className="brand-monogram" aria-hidden="true">
        ST
      </span>
      <span>
        <span className="brand-word d-block">STAYEST</span>
        <span className="brand-sub d-none d-sm-block">Company Let &amp; Property Management</span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`site-nav navbar navbar-expand-xl fixed-top py-2 ${scrolled ? "is-scrolled" : ""}`}
      aria-label="Primary"
    >
      <div className="container">
        <Logo />

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <i className={`bi ${open ? "bi-x-lg" : "bi-list"} fs-3`} style={{ color: "var(--navy)" }} />
        </button>

        <div
          id="primary-navigation"
          className={`collapse navbar-collapse ${open ? "show" : ""}`}
        >
          <ul className="navbar-nav ms-auto mb-3 mb-xl-0 align-items-xl-center">
            {links.map((l) => (
              <li className="nav-item" key={l.label}>
                <Link
                  to={l.to}
                  {...(l.hash ? { hash: l.hash } : {})}
                  className="nav-link"
                  activeOptions={{ exact: true, includeHash: false }}
                  activeProps={l.hash ? {} : { className: "nav-link active" }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="nav-item ms-xl-3 mt-2 mt-xl-0">
              <Link to="/contact" className="btn btn-gold btn-sm px-4 py-2" onClick={() => setOpen(false)}>
                Free Assessment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
