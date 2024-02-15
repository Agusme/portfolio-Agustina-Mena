import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import rollingMovies from "../../assets/proyectos/rollingMovies.jpg";
import turismo from "../../assets/proyectos/turismo.jpeg";
import veterinaria from "../../assets/proyectos/veterinaria.jpeg";
import bmz from "../../assets/proyectos/bmz.jpeg";
import paleta from "../../assets/proyectos/paleta.jpeg";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const {t} = useTranslation();

  return (
    <div className="pb-5 pt-3 bg-main"  id="projects">
      <h1 className="text-center fs-1 pb-1 fw-bold text-white pt-5">
      {t("projects")} 
      </h1>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <a
              href="https://rollingmoviesplus.netlify.app/"
              target="_blanck"
              className="text-decoration-none"
            >
              <Card className="my-3 mx-5 bg-glass text-white text-center project-card">
                <Card.Body>
                  <Card.Title className="fw-semibold">
                    Rolling Movies +
                  </Card.Title>
                  <img
                    src={rollingMovies}
                    alt="img rolling movies projects"
                    className="img-fluid rounded img-projects"
                  />
                  <hr />
                  <p className="fw-semibold size-project my-2">
                    HTML | CSS | BOOSTRAP | JS VANILLA
                  </p>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <a
              href="https://turismonoa2023.netlify.app/"
              target="_blanck"
              className="text-decoration-none"
            >
              <Card className="my-3 mx-5 bg-glass text-white text-center project-card">
                <Card.Body>
                  <Card.Title className="fw-semibold">Turismo NOA</Card.Title>

                  <img
                    src={turismo}
                    alt="img turismo projects"
                    className="img-fluid rounded  img-projects"
                  />
                  <hr />
                  <p className="fw-semibold size-project my-2">
                    HTML | CSS | BOOSTRAP
                  </p>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <a
              href="https://inmobiliaria-bmz-propiedades.netlify.app/"
              target="_blanck"
              className="text-decoration-none"
            >
              <Card className="my-3 mx-5 bg-glass text-white text-center project-card">
                <Card.Body>
                  <Card.Title className="fw-semibold">
                    Inmobiliaria Bmz Propiedades
                  </Card.Title>
                  <img
                    src={bmz}
                    alt="img inmobiliaria projects"
                    className="img-fluid rounded  img-projects"
                  />
                  <hr />
                  <p className="fw-semibold my-2 size-project">
                    HTML | CSS | BOOSTRAP | In progress
                  </p>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col lg={6} md={6} sm={12}>
          <a
              href="https://veterinariarolling.netlify.app/"
              target="_blanck"
              className="text-decoration-none"
            >
              <Card className="my-3 mx-5 bg-glass text-white text-center project-card">
                <Card.Body>
                  <Card.Title className="fw-semibold">
                    Veterinaria Rolling
                  </Card.Title>
                  <img
                    src={veterinaria}
                    alt="img veterinaria projects"
                    className="img-fluid rounded  img-projects"
                  />
                  <hr />
                  <p className="fw-semibold my-2 size-project">
                    HTML | CSS | BOOSTRAP | REACT | MONGO DB | NODE.JS
                  </p>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <a
              href="https://colourpallete.netlify.app/"
              target="_blanck"
              className="text-decoration-none"
            >
              <Card className="my-3 mx-5 bg-glass text-white text-center project-card">
                <Card.Body>
                  <Card.Title className="fw-semibold">
                  Colour Pallete
                  </Card.Title>
                  <img
                    src={paleta}
                    alt="img colour pallete"
                    className="img-fluid  img-projects"
                  />
                  <p className="fw-semibold my-2 size-project">
                    HTML | CSS | BOOSTRAP | REACT | LOCALSTORAGE
                  </p>
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
