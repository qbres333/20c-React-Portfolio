// import hook and React Bootstrap components
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Contact() {
  // React form validation docs
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

  }

  return (
    <div className="container container-fluid mt-5 mb-5">
      <h3 className="page-title">
        <b>Contact</b>
      </h3>
      {/* React Forms docs */}
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="col-6 form contact-form mt-4"
      >
        <Form.Group
          className="form-group"
          // controlId="validationCustom01"
          hasValidation
        >
          <Form.Label>
            <b>Name:</b>
          </Form.Label>
          <Form.Control required type="text" />
          <Form.Control.Feedback type="invalid">
            Name is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          className="form-group mt-3"
          // controlId="validationCustom02"
          hasValidation
        >
          <Form.Label>
            <b>Email Address:</b>
          </Form.Label>
          <Form.Control required type="email" />
          <Form.Control.Feedback type="invalid">
            Email is invalid
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          className="form-group mt-3"
          // controlId="validationCustom03"
          hasValidation
        >
          <Form.Label>
            <b>Message:</b>
          </Form.Label>
          <Form.Control required as="textarea" rows={5} />
          <Form.Control.Feedback type="invalid">
            Message is required
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="secondary" className="col-12 mt-4">
          Submit
        </Button>
      </Form>
    </div>
  );
}
