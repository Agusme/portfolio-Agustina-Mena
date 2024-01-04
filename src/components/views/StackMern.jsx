import React from "react";
import html5 from "../../assets/iconos/html5.svg";
import css3 from "../../assets/iconos/css3.svg";
import js from "../../assets/iconos/js.svg";
import corelDraw from "../../assets/iconos/corelDraw.svg";
import github from "../../assets/iconos/github.svg";
import nodejs from "../../assets/iconos/nodejs.svg";
import express from "../../assets/iconos/express.svg";
import mongodb from "../../assets/iconos/mongodb.svg";
import boostrap from "../../assets/iconos/boostrap.svg";
import figma from "../../assets/iconos/figma.svg";
import visual from "../../assets/iconos/visual.svg";
import react from "../../assets/iconos/react.svg";
import { Col, Container, Row } from "react-bootstrap";
const StackMern = () => {
  return (
    <div className="bg-cemento py-5">
      <Container className="bg-glass">
        <h1 className="text-center text-black fs-1 pb-1 fw-semibold">
          Mi Stack tecnologico
        </h1>
        <Row >
          <Col lg={3} md={3} sm={6} className="text-center py-2">
            <img src={html5} alt="html5 icon" className="img-fluid mx-2 icon-size" />
            <p className="fw-semibold text-black">HTML5</p>
          </Col>

          <Col lg={3} md={3} sm={6} className="text-center py-2">
            <img src={css3} alt="css3 icon " className="img-fluid mx-2 icon-size" />
            <p className="fw-semibold text-black">Css3</p>

          </Col>
          <Col lg={3} md={3} sm={6} className="text-center py-2">
            <img src={js} alt="javascript icon" className="img-fluid mx-2 icon-size" />
            <p className="fw-semibold text-black">Javascript</p>

          </Col>

          <Col lg={3} md={3} sm={6} className="text-center py-2">
            <img src={react} alt="React icon" className="img-fluid mx-2 icon-size" />
            <p className="fw-semibold text-black">React</p>

          </Col>
        </Row>
        <Row>
          <Col lg={3} md={3} sm={6} className="text-center py-2">
            <img src={github} alt="Github icon" className="img-fluid mx-2 icon-size" />
            <p className="fw-semibold text-black">Github</p>

          </Col>
          <Col lg={3} md={3} sm={6} className="text-center py-2">
            <img src={express} alt="express" className="img-fluid mx-2 icon-size" />
            <p className="fw-semibold text-black">Express</p>

          </Col>
          <Col lg={3} md={3} sm={6} className="text-center py-2">
            <img
              src={mongodb}
              alt="mongodb"
              className="img-fluid mx-2 icon-size"
            />
                        <p className="fw-semibold text-black">MongoDB</p>

          </Col>

          <Col lg={3} md={3} sm={6} className="text-center py-2">
            <img
              src={nodejs}
              alt="node js"
              className="img-fluid mx-2 icon-size"
            />
                        <p className="fw-semibold text-black">Node js</p>

          </Col>
        </Row>
        <Row>
          <Col lg={3} md={3} sm={6} className="text-center py-2">
            <img
              src={figma}
              alt="Figma icon"
              className="img-fluid mx-2 icon-size"
            />
                        <p className="fw-semibold text-black">Figma</p>

          </Col>
          
          <Col lg={3} md={3} sm={6} className="text-center py-2">
            <img
              src={boostrap}
              alt="Boostrap Icon"
              className="img-fluid mx-2 icon-size"
            />
                        <p className="fw-semibold text-black">Boostrap</p>

          </Col>
          <Col lg={3} md={3} sm={6} className="text-center py-2">
            <img src={visual} alt="Visual Studio Code Icon" className="img-fluid mx-2 icon-size" />
            <p className="fw-semibold text-black">Visual Studio Code</p>

          </Col>
          <Col lg={3} md={3} sm={6} className="text-center py-2">
            <img src={corelDraw} alt="Corel Draw" className="img-fluid mx-2 icon-size" />
            <p className="fw-semibold text-black">Corel Draw</p>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StackMern;
