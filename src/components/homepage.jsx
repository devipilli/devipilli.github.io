import React, { useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Row,
  Col,
  Card,
  Typography,
  Space,
  Select,
} from "antd";
import moment from "moment";

import { PhoneOutlined, CalendarOutlined } from "@ant-design/icons";

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
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Dr. Devi Nagini Pilli" description="Physiotherapist" />

            <div style={{ marginTop: "16px" }}>
              {/* Contact Information inside Profile Card */}
              <Paragraph>
                <PhoneOutlined /> Phone:{" "}
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </Paragraph>
              <Paragraph>
                <PhoneOutlined /> 123 Physiotherapy Street, Health City, Country
              </Paragraph>
            </div>
          </Card>
        </Col>

        {/* Contact Information */}
        <Col xs={24} sm={24} md={14} lg={10}>
          {/* Book Your Appointment Card */}
          {/* <Card title="Book Your Appointment"> */}
          {/* <Space direction="vertical" style={{ width: "100%" }}> */}
          <div
            class="calendly-inline-widget"
            data-url="https://calendly.com/pillidevi787?hide_landing_page_details=1&hide_gdpr_banner=1"
            style={{ minWidth: "320px", height: "700px" }}
          ></div>
          <script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            async
          ></script>

          {/* <div
                class="calendly-inline-widget"
                data-url="https://calendly.com/pillidevi787"
                style={{ minWidth: "320px", height: "700px" }}
              ></div>
              <script
                type="text/javascript"
                src="https://assets.calendly.com/assets/external/widget.js"
                async
              ></script> */}
          {/* <!-- Calendly inline widget end --> */}
          {/* Date Selection */}
          {/* <DatePicker
                onChange={handleDateChange}
                disabledDate={(current) =>
                  current && current < moment().startOf("day")
                }
                style={{ width: "100%" }}
                placeholder="Select a date"
              />

               {selectedDate && (
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Title level={5}>Available Time Slots:</Title>
                  <Row gutter={[8, 8]} style={{ marginBottom: "16px" }}>
                    {availableTimeSlots[selectedDate.format("YYYY-MM-DD")]?.map(
                      (time) => (
                        <Col span={8} key={time}>
                          <Button
                            type={selectedTime === time ? "primary" : "default"}
                            style={{ width: "100%" }}
                            onClick={() => handleTimeSelect(time)}
                          >
                            {time}
                          </Button>
                        </Col>
                      )
                    )}
                  </Row>
                </Space>
              )}

               <Button
                type="primary"
                onClick={handleBooking}
                disabled={!selectedDate || !selectedTime}
                style={{ width: "100%" }}
              >
                Book Appointment
              </Button> */}
          {/* </Space>
          </Card> */}
        </Col>
      </Row>

      {/* Confirmation Display */}
      {appointment && (
        <Row justify="center" style={{ marginTop: "30px" }}>
          <Col span={24} md={12}>
            <Card title="Appointment Confirmation">
              <p>
                <strong>Name:</strong> {appointment.name}
              </p>
              <p>
                <strong>Date:</strong> {appointment.date.format("YYYY-MM-DD")}
              </p>
              <p>
                <strong>Time:</strong> {appointment.time}
              </p>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Homepage;
