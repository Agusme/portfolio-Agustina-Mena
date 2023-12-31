import React from "react";
import html from "../../assets/iconos/html.svg";
import css from "../../assets/iconos/css.svg";
import js from "../../assets/iconos/js.svg";
import corelDraw from "../../assets/iconos/corelDraw.svg";
import github from "../../assets/iconos/github.svg";
import logos_nodejs from "../../assets/iconos/logos_nodejs.svg";
import expressjs from "../../assets/iconos/expressjs.svg";
import mongodbIcon from "../../assets/iconos/mongodbIcon.svg";
import boostrapIcon from "../../assets/iconos/boostrapIcon.svg";
import logos_figma from "../../assets/iconos/logos_figma.svg";
import visualIcon from "../../assets/iconos/visualIcon.svg";
import react from "../../assets/iconos/react.svg";
import { Col, Container, Row } from "react-bootstrap";
const StackMern = () => {
  return (
    <div className="bg-cemento py-5">
      <Container>
        <h1 className="text-center text-white fs-1 pb-1 fw-semibold">
          Mi Stack tecnologico
        </h1>

        <Row>
          <Col lg={3} md={3} sm={12} className="text-center py-2">
            <img src={html} alt="" className="img-fluid mx-2 icon-size" />
          </Col>

          <Col lg={3} md={3} sm={12} className="text-center py-2">
            <img src={css} alt="" className="img-fluid mx-2 icon-size" />
          </Col>
          <Col lg={3} md={3} sm={12} className="text-center py-2">
            <img src={js} alt="" className="img-fluid mx-2 icon-size" />
          </Col>

          <Col lg={3} md={3} sm={12} className="text-center py-2">
            <img src={react} alt="" className="img-fluid mx-2 icon-size" />
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={3} sm={12} className="text-center py-2">
            <img src={github} alt="" className="img-fluid mx-2 icon-size" />
          </Col>
          <Col lg={3} md={3} sm={12} className="text-center py-2">
            <img src={expressjs} alt="" className="img-fluid mx-2 icon-size" />
          </Col>
          <Col lg={3} md={3} sm={12} className="text-center py-2">
            <img
              src={mongodbIcon}
              alt=""
              className="img-fluid mx-2 icon-size"
            />
          </Col>

          <Col lg={3} md={3} sm={12} className="text-center py-2">
            <img
              src={logos_nodejs}
              alt=""
              className="img-fluid mx-2 icon-size"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={3} sm={12} className="text-center py-2">
            <img
              src={logos_figma}
              alt=""
              className="img-fluid mx-2 icon-size"
            />
          </Col>
          
          <Col lg={3} md={3} sm={12} className="text-center py-2">
            <img
              src={boostrapIcon}
              alt=""
              className="img-fluid mx-2 icon-size"
            />
          </Col>
          <Col lg={3} md={3} sm={12} className="text-center py-2">
            <img src={visualIcon} alt="" className="img-fluid mx-2 icon-size" />
          </Col>
          <Col lg={3} md={3} sm={12} className="text-center py-2">
            <img src={corelDraw} alt="" className="img-fluid mx-2 icon-size" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StackMern;
