import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div expand="lg" className="footer-color" fluid>
      <Container >
        
        <Row>
            <Col lg={6} sm={12}>
            
            </Col>
          <Col lg={3} sm={12}>
            <ul className="list-unstyled">
              <li>PROYECTOS</li>
              <li>SOBRE MI</li>
              <li>CONTACTO</li>
            </ul>
          </Col>
          <Col lg={3} sm={12}>
            <ul className="list-unstyled">
              <li>PROYECTO</li>
              <li>PROYECTO</li>
              <li>PROYECTO</li>
              <li>PROYECTO</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
