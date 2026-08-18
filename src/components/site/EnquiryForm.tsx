import { useState, type FormEvent } from "react";

/**
 * Landlord enquiry / property assessment form.
 * Uses Bootstrap's was-validated styling with native constraint validation.
 * Submission is intentionally client-side only — swap `onSubmit` for a CRM
 * or server function later without touching the markup.
 */
export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [validated, setValidated] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }
    setValidated(true);
    setSent(true);
    form.reset();
    setValidated(false);
  };

  return (
    <form
      className={`needs-validation ${validated ? "was-validated" : ""}`}
      noValidate
      onSubmit={handleSubmit}
      aria-label="Property assessment enquiry form"
    >
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label" htmlFor="ef-name">Full name</label>
          <input className="form-control" id="ef-name" name="name" required autoComplete="name" />
          <div className="invalid-feedback">Please enter your name.</div>
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="ef-email">Email address</label>
          <input type="email" className="form-control" id="ef-email" name="email" required autoComplete="email" />
          <div className="invalid-feedback">Please enter a valid email address.</div>
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="ef-phone">Phone number</label>
          <input
            type="tel"
            className="form-control"
            id="ef-phone"
            name="phone"
            required
            pattern="[0-9 +()\-]{7,}"
            autoComplete="tel"
          />
          <div className="invalid-feedback">Please enter a contact number.</div>
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="ef-address">Property address</label>
          <input className="form-control" id="ef-address" name="address" required autoComplete="street-address" />
          <div className="invalid-feedback">Please enter the property address.</div>
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="ef-bedrooms">Bedrooms</label>
          <select className="form-select" id="ef-bedrooms" name="bedrooms" required defaultValue="">
            <option value="" disabled>Select</option>
            <option>Studio</option>
            <option>1 bedroom</option>
            <option>2 bedrooms</option>
            <option>3 bedrooms</option>
            <option>4+ bedrooms</option>
          </select>
          <div className="invalid-feedback">Please select the number of bedrooms.</div>
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="ef-type">Property type</label>
          <select className="form-select" id="ef-type" name="propertyType" required defaultValue="">
            <option value="" disabled>Select</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Block / multiple units</option>
            <option>New development</option>
            <option>Other</option>
          </select>
          <div className="invalid-feedback">Please select a property type.</div>
        </div>
        {!compact && (
          <div className="col-12">
            <label className="form-label" htmlFor="ef-message">Message</label>
            <textarea className="form-control" id="ef-message" name="message" rows={4} />
          </div>
        )}
        <div className="col-12 d-flex flex-wrap align-items-center gap-3 pt-2">
          <button type="submit" className="btn btn-navy px-4">
            Request Free Assessment
          </button>
          <span className="small text-secondary">
            No obligation. Written proposal within 48 hours.
          </span>
        </div>
        {sent && (
          <div className="col-12" role="status">
            <div className="alert alert-success rounded-4 mb-0">
              Thank you — your enquiry has been received. A member of our landlord team will be in
              touch shortly.
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
