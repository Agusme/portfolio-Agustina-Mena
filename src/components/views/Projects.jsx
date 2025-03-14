import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import { itemsProjects } from '../../data/db'; 

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="pb-5 pt-5 bg-projects" id="projects">
      <h1 className="text-center fs-1 pb-1 fw-bold text-secondary pt-5">
        {t("projects")}
      </h1>
      <Fade>
        <Container>
          <Row className="g-3">
            {itemsProjects.map((item, index) => (
              <Col lg={4} md={6} sm={12} key={index}>
                <a
                  href={item.url}
                  target="_blank"
                  className="text-decoration-none"
                  rel="noopener noreferrer"
                >
                  <Card className="my-3 mx-5 bg-glass text-secondary text-center project-card border-0 h-100">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <h6 className="fw-semibold">{item.name}</h6>
                      <img
                        src={item.img}
                        alt={item.name}
                        className="img-fluid img-projects"
                      />
                      <p className="fw-semibold size-project my-2">
                        {item.technologies}
                      </p>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </Fade>
    </div>
  );
};

export default Projects;
