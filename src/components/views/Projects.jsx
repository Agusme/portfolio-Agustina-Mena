import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import rollingMovies from "../../assets/proyectos/rollingMovies.jpg";

const Projects = () => {
  return (
    <div className="py-5 bg-black">
      <h1 className="text-center fs-1 pb-1 fw-bold text-white mt-5">Proyectos</h1>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <a href="https://rollingmoviesplus.netlify.app/" target="_blanck" className="text-decoration-none">
            <Card className="my-3 mx-5 bg-glass text-white text-center project-card" >
              <Card.Body>
                <Card.Title className="fw-semibold">Rolling Movies +</Card.Title>
<img src={rollingMovies} alt="img rolling movies projects" className="img-fluid" />
<p className="fw-semibold fs-6 my-1">HTML | CSS | BOOSTRAP | JS VANILLA</p>
              </Card.Body>
            </Card>
            </a>
          
          </Col>
          <Col lg={6} md={6} sm={12}>
          <a href="https://rollingmoviesplus.netlify.app/" target="_blanck" className="text-decoration-none">
            <Card className="my-3 mx-5 bg-glass text-white text-center project-card" >
              <Card.Body>
                <Card.Title className="fw-semibold">Rolling Movies +</Card.Title>
<img src={rollingMovies} alt="img rolling movies projects" className="img-fluid" />
<p className="fw-semibold fs-6 my-1">HTML | CSS | BOOSTRAP | JS VANILLA</p>
              </Card.Body>
            </Card>
            </a>
          </Col>
   
        </Row>
        <Row>
        <Col lg={6} md={6} sm={12}>
        <a href="https://rollingmoviesplus.netlify.app/" target="_blanck" className="text-decoration-none">
            <Card className="my-3 mx-5 bg-glass text-white text-center project-card" >
              <Card.Body>
                <Card.Title className="fw-semibold">Rolling Movies +</Card.Title>
<img src={rollingMovies} alt="img rolling movies projects" className="img-fluid" />
<p className="fw-semibold fs-6 my-1">HTML | CSS | BOOSTRAP | JS VANILLA</p>
              </Card.Body>
            </Card>
            </a>
          </Col>
          <Col lg={6} md={6} sm={12}>
          <a href="https://rollingmoviesplus.netlify.app/" target="_blanck" className="text-decoration-none">
            <Card className="my-3 mx-5 bg-glass text-white text-center project-card" >
              <Card.Body>
                <Card.Title className="fw-semibold">Rolling Movies +</Card.Title>
<img src={rollingMovies} alt="img rolling movies projects" className="img-fluid" />
<p className="fw-semibold fs-6 my-1">HTML | CSS | BOOSTRAP | JS VANILLA</p>
              </Card.Body>
            </Card>
            </a>
          </Col>
        </Row>
        <Row>
        <Col lg={6} md={6} sm={12}>
        <a href="https://rollingmoviesplus.netlify.app/" target="_blanck" className="text-decoration-none">
            <Card className="my-3 mx-5 bg-glass text-white text-center project-card" >
              <Card.Body>
                <Card.Title className="fw-semibold">Rolling Movies +</Card.Title>
<img src={rollingMovies} alt="img rolling movies projects" className="img-fluid" />
<p className="fw-semibold fs-6 my-1">HTML | CSS | BOOSTRAP | JS VANILLA</p>
              </Card.Body>
            </Card>
            </a>
          </Col>
          <Col lg={6} md={6} sm={12}>
          <a href="https://rollingmoviesplus.netlify.app/" target="_blanck" className="text-decoration-none">
            <Card className="my-3 mx-5 bg-glass text-white text-center project-card" >
              <Card.Body>
                <Card.Title className="fw-semibold">Rolling Movies +</Card.Title>
<img src={rollingMovies} alt="img rolling movies projects" className="img-fluid" />
<p className="fw-semibold fs-6 my-1">HTML | CSS | BOOSTRAP | JS VANILLA</p>
              </Card.Body>
            </Card>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
