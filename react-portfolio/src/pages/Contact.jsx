// import hook and React Bootstrap components
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default function Contact() {
  // React form validation docs
  const [validated, setValidated] = useState(false);
  // set initial state of email validation error
  const [emailError, setEmailError] = useState('');
  // set initial state of contact form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // add async for form submission so email request is sent to the email server upon form submission (not earlier)
  const handleSubmit = async (event) => {
    // event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      // return;
    } else {
      alert("Message sent successfully!");
    }
    setValidated(true);

  };

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
        <Form.Group className="form-group" hasvalidation="true">
          <Form.Label htmlFor="contact-name">
            <b>Name:</b>
          </Form.Label>
          {/*dev.to docs; set field value as input using onChange function */}
          <Form.Control
            required
            type="text"
            name="name"
            id="contact-name"
            value={formData.name}
            onChange={(event) =>
              setFormData({ ...formData, name: event.target.value })
            }
          />
          <Form.Control.Feedback type="invalid">
            Name is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="form-group mt-3" hasvalidation="true">
          <Form.Label htmlFor="contact-email">
            <b>Email Address:</b>
          </Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            id="contact-email"
            value={formData.email}
            onChange={(event) => {
              const email = event.target.value;
              const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g; //https://regexr.com/3e48o

              // Check for invalid format
              const errorMessage = emailRegex.test(email)
                ? ""
                : "Email is required";
              setEmailError(errorMessage);
              setFormData({ ...formData, email: event.target.value });
            }}
          />
          <Form.Control.Feedback type="invalid" value={setEmailError}>
            Email is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="form-group mt-3" hasvalidation="true">
          <Form.Label htmlFor="contact-message">
            <b>Message:</b>
          </Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={5}
            name="message"
            id="contact-message"
            value={formData.message}
            onChange={(event) =>
              setFormData({ ...formData, message: event.target.value })
            }
          />
          <Form.Control.Feedback type="invalid">
            Message is required
          </Form.Control.Feedback>
        </Form.Group>
        {/* {successMessage} */}
        <Button
          type="submit"
          variant="secondary"
          className="col-12 mt-4"
          id="submit-email"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

