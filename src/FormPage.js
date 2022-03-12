import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
export default function FormPage() {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required(),
    email: Yup.string().email().required(),
    event: Yup.string().required(),
    details: Yup.string().required(),
    terms: Yup.boolean()
      .oneOf([true], "You must accept the pricing policy terms and conditions")
      .required(),
  });
  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-xl font-bold mb-4">User form</h1>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            event: "",
            details: "",
            terms: false,
          }}
          validationSchema={validationSchema}
          onSubmit={(val) => {
            console.log(val);
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            errors,
            isValid,
            dirty,
          }) => (
            <>
              <Form className="space-y-3" onSubmit={handleSubmit}>
                <div className="relative group">
                  <label htmlFor="fullName" className="form-label">
                    Full name
                  </label>
                  <Field
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="hasError"
                  />
                </div>
                <div className="relative group">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="john@example.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="hasError"
                  />
                </div>
                <div className="relative group">
                  <label htmlFor="event" className="form-label">
                    What type of event is it?
                  </label>
                  <Field
                    as="select"
                    name="event"
                    id="event"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Select event</option>
                    <option value="corporate-event">Corporate event</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday</option>
                    <option value="other">Other</option>
                  </Field>
                  <ErrorMessage
                    name="event"
                    component="div"
                    className="hasError"
                  />
                </div>
                <div className="relative group">
                  <label htmlFor="details" className="form-label">
                    Additional details
                  </label>
                  <Field
                    as="textarea"
                    name="details"
                    id="details"
                    rows="4"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage
                    name="details"
                    component="div"
                    className="hasError"
                  />
                </div>
                <div className="relative group">
                  <label className="inline-flex">
                    <Field
                      type="checkbox"
                      id="terms"
                      name="terms"
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50 mt-1"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span className="ml-2">
                      I have read and agree{" "}
                      <a
                        href="https://google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 underline"
                      >
                        to the terms and conditions
                      </a>
                      .
                    </span>
                  </label>
                  <ErrorMessage
                    name="terms"
                    component="div"
                    className="hasError"
                  />
                </div>
                <button
                  type="submit"
                  className="btn"
                  disabled={!(isValid && dirty)}
                >
                  Submit
                </button>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </section>
  );
}
