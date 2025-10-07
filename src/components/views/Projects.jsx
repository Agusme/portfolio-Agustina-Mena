import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { itemsProjects } from "../../data/db";
import SkeletonComponent from "../common/SkeletonComponent";

const Projects = () => {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState({});

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="pb-5 pt-5 bg-projects" id="projects">
      <h1 className="text-center fs-1 pb-5 fw-bold text-green-dark pt-5">
        {t("projects")}
      </h1>
      <Fade cascade damping={0.4} duration={1200} triggerOnce={false}>
        <Container>
          <Carousel
            customTransition="all .5s"
            infinite
            responsive={responsive}
            className="pt-4 bg-glass"
          >
            {itemsProjects.map((item) => (
              <div key={item.name} className="px-2">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div className="position-relative h-100">
                    <Card
                      className={`bg-glass text-green-dark text-center project-card border-0 h-100 fade-in ${
                        loaded[item.name] ? "visible" : ""
                      }`}
                    >
                      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                        <h6 className="fw-semibold">{item.name}</h6>
                        <img
                          src={item.img}
                          alt={item.name}
                          className="img-fluid img-projects"
                          onLoad={() =>
                            setLoaded((prev) => ({
                              ...prev,
                              [item.name]: true,
                            }))
                          }
                        />
                        <p className="fw-semibold size-project my-2">
                          {item.technologies}
                        </p>
                      </Card.Body>
                    </Card>
                    <div
                      className={`skeleton-overlay ${
                        loaded[item.name] ? "fade-out" : "fade-in"
                      }`}
                    >
                      <SkeletonComponent />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </Carousel>
        </Container>
      </Fade>
    </div>
  );
};

export default Projects;
