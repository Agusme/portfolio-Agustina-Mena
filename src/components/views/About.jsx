import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about from "../../assets/about.jpeg";

const About = () => {
  return (
    <div className="bg-stack pt-3 text-white pb-5">
      <Container>
        <h1 className="text-center fw-bold text-white py-4">About me</h1>

        <Row className="bg-glass p-5">
          <Col sm={12} md={6} lg={6}>
            <h4 className="fw-semibold py-2">
              Hi, I'm Agustina Mena, Fullstack Web Developer and
              Psychopedagogue!{" "}
            </h4>
            <p>
              I'm passionate about creating websites, especially the design
              part. I could spend a whole day coding and designing.
            </p>
            <p>
              I also strive to learn and apply new knowledge constantly, as I
              believe that learning is essential to keep growing and developing,
              both personally and professionally.
            </p>
            <p>
              With a strong background in psycho-pedagogy, I combine technical
              skills with a deep understanding of human learning. My goal is to
              create web experiences that are both visually engaging and
              user-centred.
            </p>
            <p>
              Join me on this journey where technology meets creativity and
              learning! Ready for new challenges and excited for the future!
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
