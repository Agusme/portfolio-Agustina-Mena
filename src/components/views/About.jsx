import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about320 from "../../assets/about/about320.webp";
import about480 from "../../assets/about/about480.webp";
import about600 from "../../assets/about/about600.webp";
import { useTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const { t } = useTranslation();

  const { aboutme, about1, about2, about3, about4, about5 } =
    t("aboutDescription");
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const content = (
    <Container>
      <h2 className="fw-bold text-green-dark fs-1 text-center uniform-h2">
        {aboutme}
      </h2>
      <Row className="bg-glass p-5">
        <Col sm={12} md={6} lg={6}>
          <h3 className="fw-semibold py-2 fs-4">{about1}</h3>
          <p>{about2}</p>
          <p>{about3}</p>
          <p>{about4}</p>
          <p>{about5}</p>
        </Col>
        <Col
          sm={12}
          md={6}
          lg={6}
          className="d-flex align-items-center justify-content-center pt-3"
        >
         <img
  src={about600}
  srcSet={`
    ${about320} 320w,
    ${about480} 480w,
    ${about600} 600w
  `}
  sizes="
    (max-width: 576px) 320px,
    (max-width: 992px) 480px,
    600px
  "
  alt="Agustina Mena trabajando en desarrollo web"
  className="d-flex justify-content-center img-fluid w-75 rounded"
  width="374"
  height="498"
/>
        </Col>
      </Row>
    </Container>
  );
  return (
    <div className="bg-stack pt-5 pb-5 text-green-dark" id="about">
      {!isMobile ? <Slide>{content}</Slide> : content}
    </div>
  );
};

export default About;
