import React, { useState } from "react";
import { Card, Col, Container, Pagination, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import { itemsProjects } from '../../data/db'; 

const Projects = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = itemsProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(itemsProjects.length / projectsPerPage);

  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="pb-5 pt-5 bg-projects" id="projects">
      <h1 className="text-center fs-1 pb-5 fw-bold text-green-dark pt-5">
        {t("projects")}
      </h1>
      <Fade>
        <Container>
          <Row className="g-2">
            {currentProjects.map((item, index) => (
              <Col lg={4} md={6} sm={12} key={index}>
                <a
                  href={item.url}
                  target="_blank"
                  className="text-decoration-none"
                  rel="noopener noreferrer"
                >
                  <Card className="bg-glass text-green-dark text-center project-card border-0 h-100">
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
          <div className="d-flex justify-content-center mt-4">
  <Pagination className="my-5 ">{paginationItems}</Pagination>
</div>
        </Container>
      </Fade>
    </div>
  );

};

export default Projects;
