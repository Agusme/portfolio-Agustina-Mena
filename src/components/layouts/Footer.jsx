import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from '../../assets/logofigm.png'

const Footer = () => {
  return (
   <>
    <div expand="lg" className="footer-color fw-semibold pt-3" fluid>
      <Container className="text-center">
        <Row>
          <Col lg={3} sm={12}> <img
            src={logo}
            alt="Logo de la Empresa"
            height="70"
            className="d-inline-block align-top logounico"
          /></Col>
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
      <div className="bg-grey pt-2 pb-1">
<p className="text-center">© 2023 Todos los derechos reservados</p>
    </div>
    </div>
  
   </>
  );
};

export default Footer;
