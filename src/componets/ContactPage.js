import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <Container className="contact-page">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Please fill out the form below to get in touch with us.</p>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div className="contact-info">
        <h2>Our Contact Information</h2>
        <p>Email: Futurekgomotso@gmail.com</p>
      </div>
    </Container>
  );
};

export default ContactPage;
