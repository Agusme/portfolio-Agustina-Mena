import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
   <>
    <div expand="lg" className="bg-black text-white fw-semibold pt-3" fluid>
      <Container className="text-center">
        <Row>
          <Col lg={3} sm={12}>     <p
            className="d-inline-block align-top pt-3 fw-bold fs-4"
          >Agustina Mena </p></Col>
             <Col lg={3} sm={12}>
             <p className="fw-bold">PÁGINAS</p>

            <ul className="list-unstyled">
<hr />
              <li>Proyectos</li>
              <li>Sobre mi</li>
              <li>Contacto</li>
            </ul>
          </Col>
            <Col lg={3} sm={12}>
            <p className="fw-bold">MAS INFORMACIÓN</p>

            <ul className="list-unstyled">
              <hr />
              <li>Celular: 3815633405</li>

              <li> agusmena60@gmail.com</li>
            </ul>
          </Col>
       
          <Col lg={3} sm={12}>
          <p className="fw-bold">REDES</p>
          <hr />

            <ul className="list-unstyled d-flex  d-flex justify-content-center">

              <li className="mx-2 icon">
                <FaGithub />
              </li>
              <li className="mx-2 icon">
                <FaLinkedin />
              </li>
              <li className="mx-2 icon">
                <FaFacebook />
              </li>
              <li className="mx-2 icon">
                <FaInstagram />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <hr />
      <div className="pt-2 pb-1">
<p className="text-center">© 2023 Todos los derechos reservados</p>
    </div>
    </div>
  
   </>
  );
};

export default Footer;
