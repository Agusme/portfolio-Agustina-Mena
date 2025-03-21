import React from "react";
import prof from "../../assets/certificados/prof.jpg";
import certCodo from "../../assets/certificados/certCodo.jpg";
import google from "../../assets/certificados/googlw.jpg";
import alura from "../../assets/certificados/alura.jpg";
import uxResearch from "../../assets/certificados/ux-research.png";
import certBackend from "../../assets/certificados/cert-Backend.png";
import certRolling from "../../assets/certificados/certRolling.jpg";
import linkedin from "../../assets/certificados/linkedin.png";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
const Certifications = () => {
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
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const { t } = useTranslation();

  return (
    <div className="bg-projects p-5 text-secondary" id="certifications">
      <Fade>
        <Container>
          <h2 className="fw-bold  fs-1 text-center">
            {t("certificationTittle")}{" "}
          </h2>
          <Carousel responsive={responsive} className="bg-glass py-5">
            <div className="text-center container">
              <img
                src={certBackend}
                alt="certificado Backend Rolling Code"
                className="img-fluid w-100 p-3"
              />
              <h6 className="text-center fw-bold">Rolling Code</h6>
              <p>Backend database integration in web applications </p>
            </div>
            <div className="text-center container">
              <img
                src={linkedin}
                alt="certificado React LinkedIn Learning"
                className="img-fluid w-100 p-3"
              />
              <h6 className="text-center fw-bold">LinkedIn Learning</h6>
              <p>React Esencial </p>
            </div>
            <div className="text-center container ">
              <img
                src={certRolling}
                alt="certificado Rolling Code"
                className="img-fluid w-100 p-3"
              />
              <h6 className="text-center fw-bold">Rolling Code</h6>
              <p>Fullstack web programming</p>
            </div>
            <div className="text-center container">
              <img
                src={uxResearch}
                alt="certificado Ux Reasearch"
                className="img-fluid w-100 p-3"
              />
              <h6 className="text-center fw-bold">Codo a Codo</h6>
              <p>Ux Research</p>
            </div>
            <div className="text-center container">
              <img
                src={prof}
                alt="certificado CertiProf"
                className="img-fluid w-100 p-3"
              />
              <h6 className="text-center fw-bold">CertiProf</h6>
              <p>Scrum</p>
            </div>
            <div className="text-center container">
              <img
                src={certCodo}
                alt="certificado Codo a codo"
                className="img-fluid w-100 p-3"
              />
              <h6 className="text-center fw-bold">Codo a codo</h6>
              <p>Initial programming</p>
            </div>
            <div className="text-center container">
              <img
                src={alura}
                alt="certificado alura"
                className="img-fluid w-100 p-3"
              />
              <h6 className="text-center fw-bold">Alura Latam</h6>
              <p>Javascript</p>
            </div>
            <div className="text-center container">
              <img
                src={google}
                alt="certificado Google Activate"
                className="img-fluid w-100 p-3 "
              />
              <h6 className="text-center fw-bold">Google Activate</h6>
              <p>Introduction to web development</p>
            </div>
          </Carousel>
        </Container>
      </Fade>
    </div>
  );
};

export default Certifications;
