import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { itemsProjects } from "../../data/db";
import { itemsStackMern } from "../../data/db";
import html5Icon from "../../assets/iconos/html5.svg";
import css3Icon from "../../assets/iconos/css3.svg";
import jsIcon from "../../assets/iconos/js.svg";
import SkeletonComponent from "../common/SkeletonComponent";
import CustomDot from "../common/CustomDot";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [loaded, setLoaded] = useState({});

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
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
      <h2 className="text-center fs-1 fw-bold text-green-dark uniform-h2">
        {t("projects")}
      </h2>
      <Fade cascade damping={0.4} duration={1200} triggerOnce={false}>
        <Container fluid>
          <Carousel
            customTransition="all .5s"
            infinite
            responsive={responsive}
            showDots={true}
            customDot={<CustomDot />}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {itemsProjects.map((item) => {
              const { name, img, url, descripcion, technologies, github } =
                item;
              return (
                <div key={name} className="px-2">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <div className="position-relative h-100">
                      <Card
                        className={`bg-glass text-green-dark text-center project-card border-0 h-100 fade-in ${
                          loaded[name] ? "visible" : ""
                        }`}
                      >
                        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                          <h6 className="fw-semibold">{name}</h6>

                          <img
                            src={img}
                            alt={name}
                            className="img-fluid img-projects"
                            onLoad={() =>
                              setLoaded((prev) => ({
                                ...prev,
                                [name]: true,
                              }))
                            }
                          />

                          {descripcion && (
                            <p className="my-2 small">
                              {descripcion[i18n.language] || descripcion.es}
                            </p>
                          )}

                          <div className="d-flex flex-wrap justify-content-center my-2">
                            <div className="tech-badges-wrapper">
                              {(() => {
                                // normalize tokens and map to canonical keys
                                const tokens = technologies
                                  .split("|")
                                  .map((t) => t.trim())
                                  .filter(Boolean);

                                const normalize = (s) =>
                                  s.toUpperCase().replace(/\s|\.|-/g, "");

                                const preferredOrder = [
                                  "REACT",
                                  "TYPESCRIPT",
                                  "JAVASCRIPT",
                                  "HTML5",
                                  "CSS3",
                                  "TAILWINDCSS",
                                  "BOOTSTRAP",
                                  "MATERIALUI",
                                  "NODEJS",
                                  "EXPRESSJS",
                                  "MONGODB",
                                  "GITHUB",
                                  "FIGMA",
                                  "CORELDRAW",
                                ];

                                let mapped = tokens
                                  .map((tok) => {
                                    const key = normalize(tok);
                                    // try to find in itemsStackMern
                                    const found = itemsStackMern.find(
                                      (s) =>
                                        normalize(s.nameSkill) === key ||
                                        key.includes(normalize(s.nameSkill)),
                                    );
                                    if (found)
                                      return {
                                        key: normalize(found.nameSkill),
                                        img: found.imgIcon,
                                        alt: found.alt,
                                      };

                                    // fallback specific matches
                                    if (/^HTML/.test(key))
                                      return {
                                        key: "HTML5",
                                        img: html5Icon,
                                        alt: "HTML5 logo",
                                      };
                                    if (/^CSS/.test(key))
                                      return {
                                        key: "CSS3",
                                        img: css3Icon,
                                        alt: "CSS3 logo",
                                      };
                                    if (/^(JS|JAVASCRIPT)/.test(key))
                                      return {
                                        key: "JAVASCRIPT",
                                        img: jsIcon,
                                        alt: "JavaScript logo",
                                      };

                                    return { key, img: null, alt: key };
                                  })
                                  // remove duplicates by key
                                  .filter(
                                    (v, i, arr) =>
                                      arr.findIndex((x) => x.key === v.key) ===
                                      i,
                                  )
                                  // sort by preferred order
                                  .sort((a, b) => {
                                    const ia = preferredOrder.indexOf(a.key);
                                    const ib = preferredOrder.indexOf(b.key);
                                    if (ia === -1 && ib === -1) return 0;
                                    if (ia === -1) return 1;
                                    if (ib === -1) return -1;
                                    return ia - ib;
                                  });

                                // exclude these techs from showing icons
                                const skipKeys = [
                                  "ZUSTAND",
                                  "REDUX",
                                  "VITE",
                                  "LOCALSTORAGE",
                                  "HOOKS",
                                  "CONTEXTAPI",
                                ];
                                mapped = mapped.filter(
                                  (m) => !skipKeys.includes(m.key),
                                );

                                return mapped.map((m) => (
                                  <span
                                    key={m.key}
                                    className="tech-icons d-flex align-items-center px-2 py-1"
                                  >
                                    {m.img ? (
                                      <img
                                        src={m.img}
                                        alt={m.alt}
                                        className="tech-icon"
                                      />
                                    ) : (
                                      <span className="tech-icon-placeholder">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 16 16"
                                          fill="#bdbdbd"
                                        >
                                          <path d="M5.719 11.993a.5.5 0 0 1-.707.026l-3.5-3.25a.5.5 0 0 1 0-.738l3.5-3.25a.5.5 0 1 1 .68.732L2.384 8l3.308 3.068a.5.5 0 0 1 .027.707zm4.562-7.18a.5.5 0 0 1 .07.705L7.384 8l2.967 2.482a.5.5 0 1 1-.638.77l-3.5-2.929a.5.5 0 0 1 0-.77l3.5-2.929a.5.5 0 0 1 .705.07z" />
                                        </svg>
                                      </span>
                                    )}
                                  </span>
                                ));
                              })()}
                            </div>

                            <div className="d-flex flex-row gap-2 justify-content-center mt-3 w-100 project-btns-responsive">
                              <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn d-flex align-items-center px-3 py-1 flex-fill justify-content-center project-btn-demo"
                                style={{
                                  color: " #DBCE41",
                                  border: "none",
                                  backgroundColor: "#fff",
                                  fontSize: 14,
                                  fontWeight: 600,
                                  minWidth: 100,
                                  maxWidth: "100%",
                                }}
                              >
                                Ver demo
                              </a>
                              <a
                                href={github ? github : undefined}
                                target={github ? "_blank" : undefined}
                                rel={github ? "noopener noreferrer" : undefined}
                                className={`btn d-flex align-items-center px-3 py-1 flex-fill justify-content-center project-btn-code${github ? "" : " disabled"}`}
                                style={{
                                  color: "#32a5d3",
                                  border: "none",
                                  backgroundColor: "#fff",
                                  fontSize: 14,
                                  fontWeight: 600,
                                  minWidth: 100,
                                  maxWidth: "100%",
                                  opacity: github ? 1 : 0.5,
                                  pointerEvents: github ? "auto" : "none",
                                }}
                                tabIndex={github ? 0 : -1}
                              >
                                Ver código
                              </a>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>

                      <div
                        className={`skeleton-overlay ${loaded[name] ? "fade-out" : "fade-in"}`}
                      >
                        <SkeletonComponent />
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </Carousel>
        </Container>
      </Fade>
    </div>
  );
};

export default Projects;
