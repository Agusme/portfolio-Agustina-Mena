import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about from "../../assets/about.jpeg";
import { useTranslation } from "react-i18next";

const About = () => {
  const {t} = useTranslation();

  const {aboutme, about1, about2,about3, about4, about5} = t("aboutDescription");
  
  return (
    <div className=" bg-stack pt-3 text-white pb-5"  id="about">
      <Container>
        <h1 className="text-center fw-bold text-white py-4 pt-5"> {aboutme} </h1>

        <Row className="bg-glass p-5">
          <Col sm={12} md={6} lg={6}>
            <h4 className="fw-semibold py-2">
             {about1}
            </h4>
            <p>
             {about2}
            </p>
            <p>
              {about3}
            </p>
            <p>
             {about4}
            </p>
            <p>
            {about5}
            </p>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={6}
            className="d-flex align-items-center justify-content-center pt-3"
          >
            <img
              src={about}
              alt="about"
              className="d-flex justify-content-center img-fluid w-75 rounded"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
