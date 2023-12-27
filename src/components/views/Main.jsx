import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import fotoperfil12 from "../../assets/fotoperfil12.png";
const Main = () => {
  return (
    <div>
      <Container fluid className="marginTop bg-cemento">
        <Row className="d-flex align-items-center mt-5 py-5">
          <Col className="p-2 px-5 mt-5 text-center" lg={7} md={6} sm={12}>
            <h1 className="fw-bold display-1 text-white">
              &lt;Hola a Todos&gt;
            </h1>
            <p className="fw-bold color-cemento fs-1">Soy Agustina Mena</p>
            <p className="text-white fw-semibold mt-2">
              Fullstack Mern Developer | Psicopedagoga
            </p>
          </Col>
          <Col
            className="d-flex align-items-center justify-content-center my-5 pb-5"
            lg={5}
            md={6}
            sm={12}
          >
            <img
              src={fotoperfil12}
              alt="fotoperfil12"
              className="d-flex justify-content-center img-fluid w-50"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
