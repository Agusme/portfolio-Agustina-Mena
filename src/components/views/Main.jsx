import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import fotoper from "../../assets/fotoper.png";
import { useTranslation } from "react-i18next";
const Main = () => {
  const {t} = useTranslation();

  const {im, profession,cv} = t("description");
  
  return (
    <div  id="main">
      <Container fluid className=" bg-main">
        <Row className="d-flex align-items-center  pb-5">
          <Col className="p-2 px-5 mt-5 text-center" lg={7} md={6} sm={12}>
            <h1 className="fw-bold display-1 text-white">
{t("greeting")} 
            </h1>
            <p className="fw-bold text-white fs-1">{im} </p>
            <p className="text-white fw-semibold mt-2">
            {profession} </p>
            <a href="https://www.canva.com/design/DAGYPEyTl_Q/ieT1cE7ca5KkBdEN1tXM8A/view?utm_content=DAGYPEyTl_Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd871a8a5d0" className="btn btn-light fw-bold mt-2" target="_blank" rel="noopener noreferrer">{cv} </a>
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
