import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaBullseye, FaCode, FaDownload, FaRocket } from "react-icons/fa";
import fotoMain from "../../assets/fotoMain.png";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

const Main = () => {
  const { t } = useTranslation();

  const { im, profession, cv, benefits } = t("description");
  const benefitIcons = [FaRocket, FaBullseye, FaCode];

  return (
    <div id="main">
      <Fade>
        <Container  className="text-green-dark">
          <Row >
            <Col
              className="py-5 d-flex flex-column  gap-3"
              md={6}
              lg={6}
            >
              <p className="fw-bold fs-5 text-celeste ">{t("greeting")}</p>
              <h2 className="fw-bold text-green fs-1">{im} </h2>
              <h2 className="fw-bold text-green-dark fs-1 ">Agustina Mena </h2>
  
              <h1 className="fw-semibold text-green-dark fs-5">{profession} </h1>
              <div className="main-benefits d-flex align-items-center">
                {benefits.map((benefit, index) => {
                  const BenefitIcon = benefitIcons[index];

                  return (
                    <div
                      className="main-benefit d-flex align-items-center gap-3 my-2"
                      key={benefit}
                    >
                      <BenefitIcon className="main-benefit-icon" />
                      <span className="fw-bold text-green-dark">
                        {benefit}
                      </span>
                    </div>
                  );
                })}
              </div>
              <a
                href="https://drive.google.com/file/d/17NsYBkLT48pNiz5h29egDGSbC4tS_HN1/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn btn-celeste mt-3"
              >
                <span>{cv}</span>
                <FaDownload aria-hidden="true" />
              </a>
            </Col>
            <Col md={6} lg={6} className="py-5">
              <div className=" d-flex justify-content-center align-items-center">
                <img
                  src={fotoMain}
                  alt="Agustina Mena - Full Stack Frontend Developer"
                  className="d-flex justify-content-center img-fluid w-img-main"
                  loading="lazy"
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
