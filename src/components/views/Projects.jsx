import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import rollingMovies from "../../assets/proyectos/rollingMovies.png";
import turismo from "../../assets/proyectos/turismo.png";
import veterinaria from "../../assets/proyectos/veterinaria.png";
import bmz from "../../assets/proyectos/bmz.png";
import guitar from "../../assets/proyectos/guitar.png";
import proManage from "../../assets/proyectos/proManage.png";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="pb-5 pt-5 bg-projects" id="projects">
      <h1 className="text-center fs-1 pb-1 fw-bold text-secondary pt-5">
        {t("projects")}
      </h1>
      <Fade>

      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <a
              href="https://rollingmoviesplus.netlify.app/"
              target="_blank"
              className="text-decoration-none"
              rel="noopener noreferrer"
            >
              <Card className="my-3 mx-5 bg-glass text-secondary text-center project-card border-0">
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
                    HTML | CSS | BOOTSTRAP | JS VANILLA
                  </p>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <a
              href="https://turismonoa2023.netlify.app/"
              target="_blank"
              className="text-decoration-none"
              rel="noopener noreferrer"
            >
              <Card className="my-3 mx-5 bg-glass text-secondary text-center project-card border-0">
              <Card.Body>
                  <Card.Title className="fw-semibold">Turismo NOA</Card.Title>

                  <img
                    src={turismo}
                    alt="img turismo projects"
                    className="img-fluid rounded  img-projects"
                  />
                  <hr />
                  <p className="fw-semibold size-project my-2">
                    HTML | CSS | BOOTSTRAP
                  </p>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <a
              href="https://bmzpropiedades.netlify.app/"
              target="_blank"
              className="text-decoration-none"
              rel="noopener noreferrer"
            >
              <Card className="my-3 mx-5 bg-glass text-secondary text-center project-card border-0">
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
                   REACT.JS | MONGODB | NODE.JS | EXPRESS.JS
                  </p>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <a
              href="https://veterinariarolling.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <Card className="my-3 mx-5 bg-glass text-secondary text-center project-card border-0">
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
                    HTML | CSS | BOOTSTRAP | REACT | MONGO DB | NODE.JS
                  </p>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <a
              href="https://guitarla-practice.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <Card className="my-3 mx-5 bg-glass text-secondary text-center project-card border-0">
              <Card.Body>
                  <Card.Title className="fw-semibold">
                    GuitarLA 🎸
                  </Card.Title>
                  <img
                    src={guitar}
                    alt="img guitar"
                    className="img-fluid rounded  img-projects"
                  />
                  <hr />

                  <p className="fw-semibold my-2 size-project">
  REACT | BOOTSTRAP  | LOCALSTORAGE
</p>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <a
              href="https://pro-manage-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <Card className="my-3 mx-5 bg-glass text-secondary text-center project-card border-0">
              <Card.Body>
                  <Card.Title className="fw-semibold">ProManage</Card.Title>
                  <img
                    src={proManage}
                    alt="proManage"
                    className="img-fluid rounded  img-projects"
                  />
                  <hr />
                  <p className="fw-semibold my-2 size-project">
                    REACT.JS | MATERIAL UI
                  </p>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
      </Container>
      </Fade>
    </div>
  );
};

export default Projects;
