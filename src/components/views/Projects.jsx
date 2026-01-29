import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { itemsProjects } from "../../data/db";
import { itemsStackMern } from "../../data/db";
import githubIcon from "../../assets/iconos/github.svg";
import html5Icon from "../../assets/iconos/html5.svg";
import css3Icon from "../../assets/iconos/css3.svg";
import jsIcon from "../../assets/iconos/js.svg";
import SkeletonComponent from "../common/SkeletonComponent";
// Icono de compu (puedes reemplazar por otro SVG si tienes uno propio)
const ComputerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" style={{marginRight: 6}}>
    <path d="M3 0a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H3zm10 1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h10z"/>
    <path d="M0 13.5A1.5 1.5 0 0 0 1.5 15h13a1.5 1.5 0 0 0 1.5-1.5V13H0v.5zm3-1a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5V13H3v-.5z"/>
  </svg>
);

const Projects = () => {
  const { t, i18n } = useTranslation();
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
            className="pt-4"
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
                            {item.descripcion && (
                              <p className="my-2 small ">
                                {item.descripcion[i18n.language] || item.descripcion.es}
                              </p>
                            )}
                            <div className="d-flex flex-wrap gap-2 justify-content-center my-2">
                              <div style={{ minHeight: 60, display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', alignItems: 'flex-start' }}>
                                {item.technologies.split("|").map((tech) => {
                                  const techTrim = tech.trim().toUpperCase();
                                  // Buscar por nameSkill o por coincidencia parcial
                                  const techObj = itemsStackMern.find(
                                    (t) =>
                                      t.nameSkill.toUpperCase().replace(/\s|\./g, "") === techTrim.replace(/\s|\./g, "") ||
                                      techTrim.includes(t.nameSkill.toUpperCase().replace(/\s|\./g, ""))
                                  );
                                  let icon = null;
                                  if (techTrim === "HTML" || techTrim === "HTML5") {
                                    icon = <img src={html5Icon} alt="HTML5 logo" style={{ width: 20, height: 20, marginRight: 6 }} />;
                                  } else if (techTrim === "CSS" || techTrim === "CSS3") {
                                    icon = <img src={css3Icon} alt="CSS3 logo" style={{ width: 20, height: 20, marginRight: 6 }} />;
                                  } else if (techTrim === "JS" || techTrim === "JS VANILLA" || techTrim === "JAVASCRIPT") {
                                    icon = <img src={jsIcon} alt="JavaScript logo" style={{ width: 20, height: 20, marginRight: 6 }} />;
                                  } else if (techObj) {
                                    icon = <img src={techObj.imgIcon} alt={techObj.alt} style={{ width: 20, height: 20, marginRight: 6 }} />;
                                  } else {
                                    icon = (
                                      <span style={{ width: 20, height: 20, display: 'inline-block', marginRight: 6 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#bdbdbd" viewBox="0 0 16 16">
                                          <path d="M5.719 11.993a.5.5 0 0 1-.707.026l-3.5-3.25a.5.5 0 0 1 0-.738l3.5-3.25a.5.5 0 1 1 .68.732L2.384 8l3.308 3.068a.5.5 0 0 1 .027.707zm4.562-7.18a.5.5 0 0 1 .07.705L7.384 8l2.967 2.482a.5.5 0 1 1-.638.77l-3.5-2.929a.5.5 0 0 1 0-.77l3.5-2.929a.5.5 0 0 1 .705.07z"/>
                                        </svg>
                                      </span>
                                    );
                                  }
                                  return (
                                    <span
                                      key={techTrim}
                                      className="badge rounded-pill bg-light border d-flex align-items-center px-2 py-1 shadow-sm tech-badge-responsive"
                                    >
                                      {icon}
                                      <span className="text-dark small">{techTrim}</span>
                                    </span>
                                  );
                                })}
                              </div>
                              <div className="d-flex flex-row gap-2 justify-content-center mt-3 w-100 project-btns-responsive">
                                <a
                                  href={item.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn d-flex align-items-center px-3 py-1 flex-fill justify-content-center project-btn-demo"
                                  style={{ background: "#5944ac", border: "none", color: "#fff", fontSize: 14, fontWeight: 600, minWidth: 100, maxWidth: '100%' }}
                                >
                                  <ComputerIcon />
                                  Ver demo
                                </a>
                                <a
                                  href={item.github ? item.github : undefined}
                                  target={item.github ? "_blank" : undefined}
                                  rel={item.github ? "noopener noreferrer" : undefined}
                                  className={`btn d-flex align-items-center px-3 py-1 flex-fill justify-content-center project-btn-code${item.github ? '' : ' disabled'}`}
                                  style={{ background: "#32a5d3", border: "none", color: "#fff", fontSize: 14, fontWeight: 600, minWidth: 100, maxWidth: '100%', opacity: item.github ? 1 : 0.5, pointerEvents: item.github ? 'auto' : 'none' }}
                                  tabIndex={item.github ? 0 : -1}
                                >
                                  <img src={githubIcon} alt="GitHub" style={{ width: 18, height: 18, marginRight: 6, filter: "invert(1)" }} />
                                  Ver código
                                </a>
                              </div>
                              </div>
                          
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
