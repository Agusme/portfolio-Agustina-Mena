import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div
        expand="lg"
        className="bg-black color-cemento  fw-semibold pt-3"
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
              <p className="fw-bold">Pages</p>

              <ul className="list-unstyled">
                <ScrollLink to="projects" smooth={true} duration={500}>
                <li>Projects </li>

                </ScrollLink>
                <ScrollLink to="about" smooth={true} duration={500}>
                <li>About me </li>

                </ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={500}>
                <li>Contact</li>
                </ScrollLink>{" "}
              </ul>
            </Col>
            <Col lg={3} sm={12}>
              <p className="fw-bold">More information</p>

              <ul className="list-unstyled">
                <li>Celular: 3815633405</li>

                <li> agusmena60@gmail.com</li>
              </ul>
            </Col>

            <Col lg={3} sm={12}>
              <p className="fw-bold">Social media</p>

              <ul className="list-unstyled d-flex  d-flex justify-content-center">
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
          </Row>
        </Container>
        <div className="pt-2 pb-1">
          <p className="text-center">© 2024 All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
