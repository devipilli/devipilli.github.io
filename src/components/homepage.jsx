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
} from "antd";
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
          <Card title="Book Your Appointment">
            <Form
              form={form}
              name="appointmentForm"
              onFinish={onFinish}
              initialValues={{ remember: true }}
              layout="vertical"
            >
              <Form.Item
                label="Full Name"
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input placeholder="Enter your full name" />
              </Form.Item>

              <Form.Item
                label="Date of Appointment"
                name="date"
                rules={[{ required: true, message: "Please select a date!" }]}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                label="Time"
                name="time"
                rules={[{ required: true, message: "Please select a time!" }]}
              >
                <Input placeholder="Enter preferred time (e.g., 10:00 AM)" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  Book Appointment
                </Button>
              </Form.Item>
            </Form>
          </Card>
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
