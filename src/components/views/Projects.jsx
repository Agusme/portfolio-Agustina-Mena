import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Projects = () => {
  return (
    <div className="py-5 bg-cemento-oscuro">
      <h1 className="text-center fs-1 pb-1 fw-bold text-white mt-5">Proyectos</h1>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <Card className="my-3 mx-5">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Card className="my-3 mx-5">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
   
        </Row>
        <Row>
        
        <Col lg={6} md={6} sm={12}>
            <Card className="my-3 mx-5">
              <Card.Body className="bg-arena">
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Card className="my-3 mx-5">
              <Card.Body className="bg-verde">
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
        <Col lg={6} md={6} sm={12}>
            <Card className="my-3 mx-5">
              <Card.Body className="bg-brown">
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Card className="my-3 mx-5">
              <Card.Body className="bg-lightBrown">
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
