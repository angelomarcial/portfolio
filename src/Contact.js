import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const navigate = useNavigate(); // Initialize navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xzzdvejz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      navigate("/success"); // Redirect to success page
    } else {
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <div className="contact-header text-center">
          <h2 className="fw-bold">Get in Touch</h2>
          <p>I'd love to hear from you! Reach out using the form below.</p>
        </div>
        <Form className="contact-form" onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
          </Form.Group>
          <Form.Group controlId="email" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
          </Form.Group>
          <Form.Group controlId="message" className="mt-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} name="message" value={formData.message} onChange={handleChange} placeholder="Write your message here" required />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-4">
            Send Message
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
