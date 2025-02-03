import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Calendar, Card, Button, Typography, Space } from "antd";
import moment from "moment";
import "./contactForm.css"; // Make sure the custom CSS is imported

const { Title } = Typography;

const ContactForm = () => {
  const [state, handleSubmit] = useForm("manqjlqa");
  const [selectedDate, setSelectedDate] = useState(null);

  // Handle date selection from Calendar
  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  // Handle form submission with the selected date as the message
  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit({
      ...state,
      message: selectedDate ? selectedDate.format("YYYY-MM-DD") : "",
    });
  };

  if (state.succeeded) {
    return <p className="success-message">Thanks for joining!</p>;
  }

  return (
    <div className="contact-form-container">
      <Title level={2} style={{ textAlign: "center" }}>
        Contact Us
      </Title>
      <form onSubmit={handleSubmitForm} className="contact-form">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" className="form-input" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="form-group">
          <label className="fs-label" htmlFor="customer-phone">
            Phone Number
          </label>
          <input
            className="fs-input"
            id="customer-phone"
            name="customer-phone"
            placeholder="(XXX) XXX-XXXX"
            required
          />
        </div>
        {/* Hidden Message Field */}
        <input
          type="hidden"
          id="message"
          name="message"
          value={selectedDate ? selectedDate.format("YYYY-MM-DD") : ""}
        />

        <div className="form-group">
          <label>Select a Date</label>
          {/* Ant Design Calendar to select a date */}
          <Calendar onSelect={handleDateSelect} />
        </div>

        <div className="form-group">
          <button
            type="submit"
            className="submit-button"
            disabled={state.submitting}
          >
            Submit
          </button>
        </div>
      </form>

      {/* Optional: Display the selected date */}
      {selectedDate && (
        <p>Selected Date: {selectedDate.format("YYYY-MM-DD")}</p>
      )}
    </div>
  );
};

export default ContactForm;
