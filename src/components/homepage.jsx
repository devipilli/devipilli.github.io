import { Card, Col, Form, Row, Typography } from "antd";
import React, { useState } from "react";
import { PhoneOutlined } from "@ant-design/icons";
import ContactForm from "./contactForm";
import devi_nagini_pilli_profile_photo from "./devi_nagini_pilli_profile_photo.jpeg";

const { Meta } = Card;
const { Title, Paragraph } = Typography;

const Homepage = () => {
  const [form] = Form.useForm();
  const [appointment, setAppointment] = useState(null);

  // Handle appointment submission
  const onFinish = (values) => {
    setAppointment(values);
    alert(
      `Appointment booked for ${values.name} on ${values.date.format(
        "YYYY-MM-DD"
      )} at ${values.time}`
    );
  };
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  // Available time slots (you can modify based on your requirements)
  const availableTimeSlots = {
    "2025-02-07": [
      "8:00 AM",
      "8:30 AM",
      "9:00 AM",
      "9:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 PM",
      "12:30 PM",
      "1:00 PM",
      "1:30 PM",
      "2:00 PM",
      "2:30 PM",
      "3:00 PM",
      "3:30 PM",
      "4:00 PM",
    ],
    "2025-02-10": [
      "9:00 AM",
      "9:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 PM",
      "12:30 PM",
    ],
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(""); // Clear the selected time when date changes
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    alert(
      `Appointment booked for ${selectedDate.format(
        "YYYY-MM-DD"
      )} at ${selectedTime}`
    );
  };

  return (
    <div className="App" style={{ margin: "30px" }}>
      {/* Portfolio Header */}
      <Row justify="center" gutter={[16, 16]}>
        {/* Profile Card */}
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={6}
          style={{ textAlign: "center", marginBottom: "30px" }}
        >
          <Card
            hoverable
            style={{
              width: "100%",
              maxWidth: "240px",
              margin: "0 auto",
            }}
            cover={<img alt="example" src={devi_nagini_pilli_profile_photo} />}
          >
            <Meta title="Dr. Devi Nagini Pilli" description="Physiotherapist" />

            <div style={{ marginTop: "16px" }}>
              {/* Contact Information inside Profile Card */}
              <Paragraph>
                <PhoneOutlined /> Phone:{" "}
                <a href="tel:+919967711964">+91 9967711964</a>
              </Paragraph>
              <Paragraph>
                <PhoneOutlined /> 104/B, 14th Rd, TPS III, Bandra West, Mumbai,
                Maharashtra 400050, India
              </Paragraph>
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={14} lg={10}>
          <ContactForm />
        </Col>
      </Row>
    </div>
  );
};

export default Homepage;
