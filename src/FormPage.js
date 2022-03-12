import React from "react";

export default function FormPage() {
  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-xl font-bold mb-4">Form heading here</h1>
        <div className="space-y-3">
          <div className="relative group">
            <label htmlFor="name" className="form-label">
              Full name
            </label>
            <input type="text" id="name" className="form-control" />
          </div>
          <div className="relative group">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="text"
              id="email"
              className="form-control"
              placeholder="john@example.com"
            />
          </div>
          <div className="relative group">
            <label htmlFor="event" className="form-label">
              What type of event is it?
            </label>
            <select name="event" id="event" className="form-control">
              <option value="corporate-event">Corporate event</option>
              <option value="wedding">Wedding</option>
              <option value="birthday">Birthday</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="relative group">
            <label htmlFor="details" className="form-label">
              Additional details
            </label>
            <textarea
              name="details"
              id="details"
              rows="4"
              className="form-control"
            ></textarea>
          </div>
          <div className="relative group">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50"
              />
              <span className="ml-2">
                I have read and agree to the terms and conditions .
              </span>
            </label>
          </div>
          <button className="btn">Submit</button>
        </div>
      </div>
    </section>
  );
}
