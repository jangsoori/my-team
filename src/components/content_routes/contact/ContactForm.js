import React from "react";
import { Form, Field } from "react-final-form";
import "./ContactForm.scss";
export default function ContactForm() {
  const onSubmit = (values) => {
    console.log("form submitted");
  };
  const required = (value) => (value ? undefined : "This field is required");

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} className="contact-form-wrapper grid">
          <section className="contact-form-inputs grid">
            <Field name="name" validate={required}>
              {({ input, meta }) => (
                <div className="contact-input-wrapper">
                  <input
                    {...input}
                    type="text"
                    placeholder="First Name"
                    className={`contact-input-field ${
                      meta.error && meta.touched ? "error" : ""
                    }`}
                  />
                  {meta.error && meta.touched && (
                    <span className="input-error">{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="email" validate={required}>
              {({ input, meta }) => (
                <div className="contact-input-wrapper">
                  <input
                    {...input}
                    type="email"
                    placeholder="Email Address"
                    className={`contact-input-field ${
                      meta.error && meta.touched ? "error" : ""
                    }`}
                  />
                  {meta.error && meta.touched && (
                    <span className="input-error">{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="companyName" validate={required}>
              {({ input, meta }) => (
                <div className="contact-input-wrapper">
                  <input
                    {...input}
                    type="text"
                    placeholder="Company Name"
                    className={`contact-input-field ${
                      meta.error && meta.touched ? "error" : ""
                    }`}
                  />
                  {meta.error && meta.touched && (
                    <span className="input-error">{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="title" validate={required}>
              {({ input, meta }) => (
                <div className="contact-input-wrapper">
                  <input
                    {...input}
                    type="text"
                    placeholder="Title"
                    className={`contact-input-field ${
                      meta.error && meta.touched ? "error" : ""
                    }`}
                  />
                  {meta.error && meta.touched && (
                    <span className="input-error">{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="message" validate={required}>
              {({ input, meta }) => (
                <div className="contact-input-wrapper">
                  <textarea
                    {...input}
                    placeholder="Message"
                    className={`contact-input-field ${
                      meta.error && meta.touched ? "error" : ""
                    }`}
                  />
                  {meta.error && meta.touched && (
                    <span className="input-error">{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
          </section>
          <button
            type="submit"
            className="contact-form-submit"
            disabled={submitting}
          >
            submit
          </button>
        </form>
      )}
    />
  );
}
