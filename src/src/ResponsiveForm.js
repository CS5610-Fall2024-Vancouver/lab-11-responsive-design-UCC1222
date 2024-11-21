import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ResponsiveForm = () => (
  <Form className="p-4">
    <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" required />
      </Form.Group>
      <Form.Group as={Col} md="6" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" required />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} md="12" controlId="formEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} md="12" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" required />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="formCity">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter city" />
      </Form.Group>
      <Form.Group as={Col} md="6" controlId="formZip">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="text" placeholder="Enter zip code" />
      </Form.Group>
    </Row>
    <Button variant="primary" type="submit">Submit</Button>
  </Form>
);

export default ResponsiveForm;