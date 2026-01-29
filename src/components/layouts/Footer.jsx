import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const { t } = useTranslation();
  const { projects, about, contact } = t("navbar");
  const { pages, info, cel, social } = t("footerPage");
 
  return (
    <>
      <div

        className="pointer fw-semibold py-4 text-secondary"
        fluid
      >
        <Container className="text-center">
          <Row>
            <Col lg={3} sm={12}>
              {" "}
              <ScrollLink to="main" smooth={true} duration={500}>
              <p className="d-inline-block align-top pt-3 fw-bold fs-4">
                Agustina Mena{" "}
              </p>
            </ScrollLink>
            
            </Col>
            <Col lg={3} sm={12}>
              <p className="fw-bold">{pages}</p>

              <ul className="list-unstyled">
                <ScrollLink to="projects" smooth={true} duration={500}>
                <li>{projects} </li>

                </ScrollLink>
                <ScrollLink to="about" smooth={true} duration={500}>
                <li>{about} </li>

                </ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={500}>
                <li>{contact}</li>
                </ScrollLink>{" "}
              </ul>
            </Col>
            <Col lg={3} sm={12}>
              <p className="fw-bold">{info} </p>

              <ul className="list-unstyled">
                <li>{cel} : +54 381 563 3405</li>

                <li> agusmena60@gmail.com</li>
              </ul>
            </Col>

            <Col lg={3} sm={12}>
              <p className="fw-bold">{social} </p>

              <ul className="list-unstyled d-flex justify-content-center">
                <a
                  href="https://github.com/Agusme"
                  className="text-decoration-none"
                  style={{ color: "inherit" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="mx-2 fs-1">
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
          </Row>
        </Container>
        <div className="pt-4 pb-1">
          <p className="text-center"> &copy;  2026 All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
