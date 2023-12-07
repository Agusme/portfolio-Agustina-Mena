import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
   <>
    <div expand="lg" className="footer-color" fluid>
      <Container>
        <Row>
          <Col lg={6} sm={12}></Col>
          <Col lg={3} sm={12}>
            <ul className="list-unstyled">
              <li>PROYECTOS</li>
              <li>SOBRE MI</li>
              <li>CONTACTO</li>
            </ul>
          </Col>
          <Col lg={3} sm={12}>
            <ul className="list-unstyled d-flex  icon">
              <li className="mx-2">
                <FaGithub />
              </li>
              <li className="mx-2">
                <FaLinkedin />
              </li>
              <li className="mx-2">
                <FaFacebook />
              </li>
              <li className="mx-2 icon">
                <FaInstagram />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
   
    </div>

   </>
  );
};

export default Footer;
