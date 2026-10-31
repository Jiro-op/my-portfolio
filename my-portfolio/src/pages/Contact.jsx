import { useState } from "react";
import { profile } from "../data/profile.js";
import SocialLinks from "../components/SocialLinks.jsx";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
const emptyForm = { name: "", email: "", subject: "", message: "" };

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.subject.trim().length < 3) {
    errors.subject = "Please enter a subject.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Please write at least 10 characters.";
  }
  return errors;
}

function Field({ label, name, type = "text", value, onChange, error, multiline = false, maxLength }) {
  const id = "field-" + name;
  const errorId = id + "-error";
  const Control = multiline ? "textarea" : "input";

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <Control
        id={id}
        name={name}
        type={multiline ? undefined : type}
        rows={multiline ? 6 : undefined}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        autoComplete={name === "name" || name === "email" ? name : "off"}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? errorId : undefined}
      />
      {error && (
        <p className="field-error" id={errorId}>
          {error}
        </p>
      )}
    </div>
  );
}

function Contact() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const [trap, setTrap] = useState(false);

  const phoneLink = "tel:" + profile.phone.replace(/\s+/g, "");

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;

    if (trap) {
      // A bot ticked the hidden box. Pretend it worked and send nothing.
      setStatus("success");
      setFeedback("Thank you! Your message has been sent.");
      return;
    }

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    if (!ACCESS_KEY) {
      setStatus("error");
      setFeedback("The contact form is not set up yet. Please email directly instead.");
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: values.name.trim(),
          email: values.email.trim(),
          subject: "Portfolio message: " + values.subject.trim(),
          message: values.message.trim(),
        }),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error("Send failed");
      }

      setStatus("success");
      setFeedback("Thank you! Your message has been sent.");
      setValues(emptyForm);
      setErrors({});
    } catch {
      setStatus("error");
      setFeedback("Sorry, your message could not be sent. Please try again or email directly.");
    }
  }

  return (
    <section className="container section">
      <p className="eyebrow">Contact</p>
      <h1>Let's work together</h1>

      <div className="contact-grid">
        <div className="contact-details">
          <h3>Get in touch</h3>
          <ul className="contact-list">
            <li>
              <span>Email</span>
              <a href={"mailto:" + profile.email}>{profile.email}</a>
            </li>
            <li>
              <span>Phone</span>
              <a href={phoneLink}>{profile.phone}</a>
            </li>
            <li>
              <span>Location</span>
              <p>{profile.location}</p>
            </li>
          </ul>

          <SocialLinks heading="Find me online" />
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <Field label="Name" name="name" value={values.name} onChange={handleChange} error={errors.name} maxLength={80} />
          <Field label="Email" name="email" type="email" value={values.email} onChange={handleChange} error={errors.email} maxLength={120} />
          <Field label="Subject" name="subject" value={values.subject} onChange={handleChange} error={errors.subject} maxLength={120} />
          <Field label="Message" name="message" multiline value={values.message} onChange={handleChange} error={errors.message} maxLength={2000} />

          <div className="hp" aria-hidden="true">
            <label htmlFor="bot-check">Leave this box empty</label>
            <input
              type="checkbox"
              id="bot-check"
              name="bot-check"
              tabIndex={-1}
              autoComplete="off"
              checked={trap}
              onChange={(e) => setTrap(e.target.checked)}
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          <div aria-live="polite">
            {status === "success" && <p className="form-status success">{feedback}</p>}
            {status === "error" && <p className="form-status error">{feedback}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;