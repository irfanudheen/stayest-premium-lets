import { Link } from "@tanstack/react-router";
import { Logo } from "./Navbar";

const quickLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Guaranteed Rent", to: "/guaranteed-rent" },
  { label: "Company Let", to: "/company-let" },
  { label: "Areas We Cover", to: "/areas-covered" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="footer pt-5 mt-0">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4">
            <Logo dark />
            <p className="mt-4 mb-4" style={{ maxWidth: "22rem" }}>
              STAYEST partners with UK landlords, agents and investors to deliver guaranteed monthly
              rent and fully managed, professionally maintained properties.
            </p>
            <div className="d-flex gap-2">
              <a className="social-dot" href="https://www.linkedin.com" aria-label="STAYEST on LinkedIn">
                <i className="bi bi-linkedin" aria-hidden="true" />
              </a>
              <a className="social-dot" href="https://www.facebook.com" aria-label="STAYEST on Facebook">
                <i className="bi bi-facebook" aria-hidden="true" />
              </a>
              <a className="social-dot" href="https://www.instagram.com" aria-label="STAYEST on Instagram">
                <i className="bi bi-instagram" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <h6 className="mb-4">Quick Links</h6>
            <ul className="list-unstyled d-grid gap-2 mb-0">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-lg-2">
            <h6 className="mb-4">Legal</h6>
            <ul className="list-unstyled d-grid gap-2 mb-0">
              <li>
                <Link to="/" hash="privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/" hash="terms">Terms</Link>
              </li>
              <li>
                <Link to="/" hash="cookies">Cookies</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h6 className="mb-4">Contact</h6>
            <ul className="list-unstyled d-grid gap-3 mb-0">
              <li className="d-flex gap-2">
                <i className="bi bi-geo-alt text-gold" aria-hidden="true" />
                <span>128 Aldersgate Street, London EC1A 4JQ</span>
              </li>
              <li className="d-flex gap-2">
                <i className="bi bi-telephone text-gold" aria-hidden="true" />
                <a href="tel:+442045772100">+44 20 4577 2100</a>
              </li>
              <li className="d-flex gap-2">
                <i className="bi bi-envelope text-gold" aria-hidden="true" />
                <a href="mailto:landlords@stayest.co.uk">landlords@stayest.co.uk</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-top" style={{ borderColor: "rgba(255,255,255,.12)" }}>
        <div className="container py-4 d-flex flex-column flex-md-row justify-content-between gap-2 small">
          <span>© {new Date().getFullYear()} STAYEST Property Partners Ltd. All rights reserved.</span>
          <span>Registered in England &amp; Wales · Company No. 14872210</span>
        </div>
      </div>
    </footer>
  );
}
