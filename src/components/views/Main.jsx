import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import fotoper from "../../assets/fotoper.png";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

const Main = () => {
  const { t } = useTranslation();

  const { im, profession, cv } = t("description");

  return (
    <div id="main">
      <Fade>
      <Container fluid className="text-green-dark py-5">
        <Row className="py-5">
          <Col
            className="py-5 d-flex flex-column justify-content-center align-items-center gap-3"
            md={6}
            lg={6}
          >
            <h1 className="fw-bold display-1">{t("greeting")}</h1>
            <h2 className="fw-bold text-green fs-1">{im} </h2>
            <h1 className="fw-semibold lead">{profession} </h1>
            <a
              href="https://www.canva.com/design/DAGgIbNBCLw/wJOMVsowGH78tUccmbPopg/view?utm_content=DAGgIbNBCLw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7fa68bfac6"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              {cv}
            </a>
          </Col>
          <Col
            md={6}
            lg={6}
          className="py-5"
          >
            <div className="d-flex justify-content-center align-items-center">
            <img
              src={fotoper}
              alt="fotoper"
              className="d-flex justify-content-center img-fluid w-50"
            />

            </div>
          </Col>
        </Row>
      </Container>
      </Fade>
    </div>
  );
};

export default Main;
