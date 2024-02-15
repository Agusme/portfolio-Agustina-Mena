import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import fotoper from "../../assets/fotoper.png";

const Main = () => {
  return (
    <div  id="main">
      <Container fluid className="paddingTop bg-main pb-5">
        <Row className="d-flex align-items-center  pb-5">
          <Col className="p-2 px-5 mt-5 text-center" lg={7} md={6} sm={12}>
            <h1 className="fw-bold display-1 text-white">
              &lt;H E L L O&gt;
            </h1>
            <p className="fw-bold text-white fs-1">I´m Agustina Mena</p>
            <p className="text-white fw-semibold mt-2">
              Fullstack Mern Developer | Psychopedagogue
            </p>
            <a href="https://drive.google.com/file/d/1eLCaPp2ckyq8wZhXs2AM1O_YI-KAnjup/view?usp=sharing" className="btn btn-light fw-bold mt-2" target="_blank" rel="noopener noreferrer">View CV</a>
          </Col>
          <Col
            className="d-flex align-items-center justify-content-center my-5 pt-5"
            lg={5}
            md={6}
            sm={12}
          >
            <img
              src={fotoper}
              alt="fotoper"
              className="d-flex justify-content-center img-fluid w-50"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
