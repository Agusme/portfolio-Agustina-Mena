import React from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  validateEmail,
  validateMessage,
  validateName,
} from "../../helpers/validateForm";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

const Contact = () => {
  const { register, handleSubmit, errors, reset } = useForm();
const [showModal, setShowModal] = React.useState(false)

  const emailjsConfig = {
    serviceId: "service_72n9tya",
    templateId: "template_c4ds54h",
    publicKey: "BDtEaJzGHui804FZE"
  };

  const onSubmit = async (data) => {
    try {
      const emailData = {
        ...data,
        user_name: data.user_name,
        user_email: data.user_email,
        message: data.message,
      };
     const response = await emailjs.send(
  emailjsConfig.serviceId,
  emailjsConfig.templateId,
  emailData,
  emailjsConfig.publicKey
);
console.log("correo enviado con exito: ", response);
setShowModal(true);
reset();
    } catch (error) {
      console.log("error al enviar el correo", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="bg-stack py-5 text-white"  id="contact">
      <h1 className="text-center  fs-1 pb-3 fw-bold pt-2">Contact me </h1>
      <Container className="bg-glass p-5">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <h4 className="fw-semibold py-2">
              Thank you for visiting my portfolio!
            </h4>

            <p className="mt-3">
              I am excited about the possibility of meeting and collaborating on
              your professional projects.
            </p>
            <p>
              If you are interested, you can contact me via the form provided or
              use the alternative information - I look forward to the
              opportunity to work with you!
            </p>

            <ul className="list-unstyled d-flex  d-flex mt-4">
              <a
                href="https://github.com/Agusme"
                className="text-decoration-none"
                style={{ color: "inherit" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="mx-2 icon">
                  <FaGithub />
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/agustina-mena-169298204/"
                style={{ color: "inherit" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="mx-2 icon">
                  <FaLinkedin />
                </li>
              </a>
              <a
                href="https://www.facebook.com/agusmena97/"
                style={{ color: "inherit" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="mx-2 icon">
                  <FaFacebook />
                </li>
              </a>
              <a
                href="https://www.instagram.com/agusmenaa/"
                style={{ color: "inherit" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="mx-2 icon">
                  <FaInstagram />
                </li>
              </a>
            </ul>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formName">
                <Form.Label>
                  Name or Company Name{" "}
                  <span className="text-danger fw-bold">*</span>
                </Form.Label>
                <Form.Control
  type="text"
  name="user_name"
  {...register("user_name", {
    required: "Please provide a valid name",
    validate: (value) => validateName(value) || "Invalid name",
  })}
  placeholder="Write your Name"
  maxLength={30}
/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                {errors && errors.user_name && errors.user_name.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label className="pt-3">
                  Email <span className="text-danger fw-bold">*</span>
                </Form.Label>
                <Form.Control
                  name="user_email"
                  {...register("user_email",{
                    required: "Please provide a valid email",
                    validate: (value) =>
                      validateEmail(value) || "Invalid email",
                  })}
                  type="text"
                  placeholder="Write your email"
                  maxLength={30}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label className="pt-3">
                  Your Message <span className="text-danger fw-bold">*</span>
                </Form.Label>
                <Form.Control
                  name="message"
                  {...register("message",{
                    required: "Please provide a valid message",
                    validate: (value) =>
                      validateMessage(value) || "Invalid message",
                  })}
                  as="textarea"
                  rows={4}
                  placeholder="Write your message here"
                  maxLength={1000}
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a message.
                </Form.Control.Feedback>
              </Form.Group>
              <Button type="submit" variant="dark" className="mt-3">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Query submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Thank you for your inquiry!        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  );
};

export default Contact;
