import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import fotoperfil from "../../assets/fotoperfil.png";
const Main = () => {
  return (
    <div>
      <Container fluid className="marginTop bg-main pb-5">
        <Row className="d-flex align-items-center mt-5 pb-5">
          <Col className="p-2 px-5 mt-5 text-center" lg={7} md={6} sm={12}>
            <h1 className="fw-bold display-1 text-white">
              &lt;H E L L O&gt;
            </h1>
            <p className="fw-bold text-white fs-1">I´m Agustina Mena</p>
            <p className="text-white fw-semibold mt-2">
              Fullstack Mern Developer | Psychopedagogue
            </p>
          </Col>
          <Col
            className="d-flex align-items-center justify-content-center my-5 pt-3"
            lg={5}
            md={6}
            sm={12}
          >
            <img
              src={fotoperfil}
              alt="fotoperfil"
              className="d-flex justify-content-center img-fluid w-50 mt-2"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
