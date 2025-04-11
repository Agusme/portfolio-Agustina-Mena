import React from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  validateEmail,
  validateMessage,
  validateName,
} from "../../helpers/validateForm";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";

const Contact = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [showModal, setShowModal] = React.useState(false);

  const emailjsConfig = {
    serviceId: "service_72n9tya",
    templateId: "template_c4ds54h",
    publicKey: "BDtEaJzGHui804FZE",
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

  const { t } = useTranslation();
  const {
    contactTittle,
    contact1,
    contact2,
    contact3,
    form1,
    form2,
    form3,
    submitContact,
  } = t("pageContact");

  return (
    <div className="bg-stack py-5 text-green-dark" id="contact">
      <h2 className="fw-bold fs-1 text-center"> {contactTittle}</h2>
      <Slide>
      <Container className="bg-glass p-5">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <h4 className="fw-semibold py-2 fs-2">{contact1} </h4>

            <p className="mt-3">{contact2}</p>
            <p>{contact3}</p>

            <ul className="list-unstyled d-flex  d-flex mt-4">
              <a
                href="https://github.com/Agusme"
                className="text-decoration-none"
                style={{ color: "inherit" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="mx-2  fs-1">
                  <FaGithub />
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/agustina-mena-169298204/"
                style={{ color: "inherit" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="mx-2 fs-1" >
                  <FaLinkedin />
                </li>
              </a>
              <a
                href="https://www.facebook.com/agusmena97/"
                style={{ color: "inherit" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="mx-2 fs-1">
                  <FaFacebook />
                </li>
              </a>
              <a
                href="https://www.instagram.com/agusmenaa/"
                style={{ color: "inherit" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="mx-2 fs-1">
                  <FaInstagram />
                </li>
              </a>
            </ul>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formName">
                <Form.Label>
                  {form1} <span className="text-danger fw-bold">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="user_name"
                  {...register("user_name", {
                    required: "Please provide a valid name",
                    validate: (value) => validateName(value) || "Invalid name",
                  })}
                  maxLength={30}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors && errors.user_name && errors.user_name.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label className="pt-3">
                  {form2} <span className="text-danger fw-bold">*</span>
                </Form.Label>
                <Form.Control
                  name="user_email"
                  {...register("user_email", {
                    required: "Please provide a valid email",
                    validate: (value) =>
                      validateEmail(value) || "Invalid email",
                  })}
                  type="text"
                  maxLength={30}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label className="pt-3">
                  {form3} <span className="text-danger fw-bold">*</span>
                </Form.Label>
                <Form.Control
                  name="message"
                  {...register("message", {
                    required: "Please provide a valid message",
                    validate: (value) =>
                      validateMessage(value) || "Invalid message",
                  })}
                  as="textarea"
                  rows={4}
                  maxLength={1000}
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a message.
                </Form.Control.Feedback>
              </Form.Group>
              <Button type="submit" variant="dark" className="mt-3">
                {submitContact}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      </Slide>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Query submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for your inquiry! </Modal.Body>
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
