import React from "react";
import html5 from "../../assets/iconos/html5.svg";
import css3 from "../../assets/iconos/css3.svg";
import js from "../../assets/iconos/js.svg";
import github from "../../assets/iconos/github.svg";
import nodejs from "../../assets/iconos/nodejs.svg";
import express from "../../assets/iconos/express.svg";
import mongodb from "../../assets/iconos/mongodb.svg";
import boostrap from "../../assets/iconos/boostrap.svg";
import figma from "../../assets/iconos/figma.svg";
import materialiu from "../../assets/iconos/materualui.svg";
import react from "../../assets/iconos/react.svg";
import corelDr from "../../assets/iconos/corelDr.svg";
import tailwind from "../../assets/iconos/TAILWIND.svg";

import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const StackMern = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-stack py-5" id="stack">
      <h1 className="text-center text-white fs-1 pb-3 fw-bold">{t("stack")}</h1>
      <Container className="bg-glass pt-4">
        <Row>
          <Col lg={3} md={4} sm={6} xs={6} className="text-center">
            <img src={html5} alt="html5 icon" className="img-fluid icon-size" />
            <p className="fw-semibold text-white pt-2">HTML5</p>
          </Col>
          <Col lg={3} md={4} sm={6} xs={6} className="text-center">
            <img src={css3} alt="css3 icon" className="img-fluid icon-size" />
            <p className="fw-semibold text-white pt-2">Css3</p>
          </Col>
          <Col lg={3} md={4} sm={6} xs={6} className="text-center">
            <img src={js} alt="javascript icon" className="img-fluid icon-size" />
            <p className="fw-semibold text-white pt-2">Javascript</p>
          </Col>
          <Col lg={3} md={4} sm={6} xs={6} className="text-center">
            <img src={react} alt="React icon" className="img-fluid icon-size" />
            <p className="fw-semibold text-white pt-2">React</p>
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={4} sm={6} xs={6} className="text-center">
            <img src={github} alt="Github icon" className="img-fluid icon-size" />
            <p className="fw-semibold text-white pt-2">Github</p>
          </Col>
          <Col lg={3} md={4} sm={6} xs={6} className="text-center">
            <img src={express} alt="express" className="img-fluid icon-size" />
            <p className="fw-semibold text-white pt-2">Express</p>
          </Col>
          <Col lg={3} md={4} sm={6} xs={6} className="text-center">
            <img src={mongodb} alt="mongodb" className="img-fluid icon-size" />
            <p className="fw-semibold text-white pt-2">MongoDB</p>
          </Col>
          <Col lg={3} md={4} sm={6} xs={6} className="text-center">
            <img src={nodejs} alt="node js" className="img-fluid icon-size" />
            <p className="fw-semibold text-white pt-2">Node js</p>
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={4} sm={6} xs={6} className="text-center">
            <img src={figma} alt="Figma icon" className="img-fluid icon-size" />
            <p className="fw-semibold text-white pt-2">Figma</p>
          </Col>
          <Col lg={3} md={4} sm={6} xs={6} className="text-center">
            <img src={boostrap} alt="Boostrap Icon" className="img-fluid icon-size" />
            <p className="fw-semibold text-white pt-2">Boostrap</p>
          </Col>
          <Col lg={3} md={4} sm={6} xs={6} className="text-center">
            <img src={materialiu} alt="Material UI" className="img-fluid icon-size" />
            <p className="fw-semibold text-white pt-2">Material Ui</p>
          </Col>
          <Col lg={3} md={4} sm={6} xs={6} className="text-center">
            <img src={corelDr} alt="Corel Draw" className="img-fluid icon-size rounded" />
            <p className="fw-semibold text-white pt-2">Corel Draw</p>
          </Col>
          <Col lg={3} md={4} sm={6} xs={6} className="text-center">
            <img src={tailwind} alt="Tailwind CSS" className="img-fluid icon-size rounded" />
            <p className="fw-semibold text-white pt-2">Tailwind</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StackMern;
