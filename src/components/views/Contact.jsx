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
import { useMediaQuery } from "react-responsive";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const [showModal, setShowModal] = React.useState(false);
  const [submitError, setSubmitError] = React.useState("");
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const emailjsConfig = {
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
  };

  const onSubmit = async (data) => {
    setSubmitError("");

    const missingConfig = Object.entries(emailjsConfig)
      .filter(([, value]) => !value)
      .map(([key]) => key);

    if (missingConfig.length > 0) {
      setSubmitError(
        `Falta configurar EmailJS (${missingConfig.join(", ")}). Crea un archivo .env con REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID y REACT_APP_EMAILJS_PUBLIC_KEY.`,
      );
      return;
    }

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
        emailjsConfig.publicKey,
      );
      console.log("correo enviado con exito: ", response);
      setShowModal(true);
      reset();
    } catch (error) {
      console.error("error al enviar el correo", error);
      const detail = error?.text || error?.message || "Error desconocido";
      const status = error?.status ? ` (status ${error.status})` : "";
      setSubmitError(`No se pudo enviar el mensaje${status}: ${detail}`);
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
  const { title: modalTitle, body: modalBody, close: modalClose } = t("modal");

  const context = (
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
              <li className="mx-2 fs-1">
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
          <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Form.Group controlId="formName">
              <Form.Label>
                {form1} <span className="text-danger fw-bold">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="user_name"
                isInvalid={!!errors.user_name}
                {...register("user_name", {
                  required: "Por favor, proporciona un nombre válido",
                  validate: (value) =>
                    validateName(value) ||
                    "Por favor, proporciona un nombre válido",
                })}
                maxLength={30}
              />
              <Form.Control.Feedback type="invalid">
                {errors.user_name?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label className="pt-3">
                {form2} <span className="text-danger fw-bold">*</span>
              </Form.Label>
              <Form.Control
                name="user_email"
                isInvalid={!!errors.user_email}
                {...register("user_email", {
                  required:
                    "Por favor, proporciona un correo electrónico válido",
                  validate: (value) =>
                    validateEmail(value) ||
                    "Por favor, proporciona un correo electrónico válido",
                })}
                type="text"
                maxLength={30}
              />
              <Form.Control.Feedback type="invalid">
                {errors.user_email?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label className="pt-3">
                {form3} <span className="text-danger fw-bold">*</span>
              </Form.Label>
              <Form.Control
                name="message"
                isInvalid={!!errors.message}
                {...register("message", {
                  required: "Por favor, proporciona un mensaje válido",
                  validate: (value) =>
                    validateMessage(value) ||
                    "Por favor, proporciona un mensaje válido",
                })}
                as="textarea"
                rows={4}
                maxLength={1000}
              />
              <Form.Control.Feedback type="invalid">
                {errors.message?.message}
              </Form.Control.Feedback>
            </Form.Group>
            {submitError && (
              <p className="text-danger mt-3 mb-0">{submitError}</p>
            )}
            <Button
              type="submit"
              variant="dark"
              className="mt-3"
              disabled={isSubmitting}
            >
              {submitContact}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
  return (
    <div className="bg-stack py-5 text-green-dark" id="contact">
      <h2 className="fw-bold fs-1 text-center uniform-h2"> {contactTittle}</h2>
      {!isMobile ? <Slide duration={500}>{context}</Slide> : context}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalBody}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            {modalClose}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
