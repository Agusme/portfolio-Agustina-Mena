import React from "react";
import prof from "../../assets/certificados/prof.jpg";
import certCodo from "../../assets/certificados/certCodo.jpg";
import google from "../../assets/certificados/googlw.jpg";
import alura from "../../assets/certificados/alura.jpg";

import certRolling from "../../assets/certificados/certRolling.jpg";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
      items: 2,
    },
  };
  return (
    <div className="bg-main p-5 text-white">
      <Container>
        <h1 className="text-center  fs-1 pb-3 fw-bold">Certifications </h1>
        <Carousel responsive={responsive} className="bg-glass py-5">
 
        <div className="text-center ">
            <img
              src={certRolling}
              alt="certificado Rolling Code"
              className="img-fluid w-100 p-3"
            />
            <p className="text-center fw-bold">Rolling Code</p>
            <p>Fullstack web programming</p>
          </div>
          <div className="text-center">
            <img
              src={prof}
              alt="certificado CertiProf"
              className="img-fluid w-100 p-3"
            />
            <p className="text-center fw-bold">CertiProf</p>
            <p>Scrum</p>
          </div>
          <div className="text-center">
            <img
              src={certCodo}
              alt="certificado Codo a codo"
              className="img-fluid w-100 p-3"
            />
            <p className="text-center fw-bold">Codo a codo</p>
            <p>Initial programming</p>
          </div>
          <div className="text-center">
            <img
              src={alura}
              alt="certificado alura"
              className="img-fluid w-100 p-3"
            />
            <p className="text-center fw-bold">Alura Latam</p>
            <p>Javascript</p>
          </div>
          <div className="text-center">
            <img
              src={google}
              alt="certificado Google Activate"
              className="img-fluid w-100 p-3 "
            />
            <p className="text-center fw-bold">Google Activate</p>
            <p>Introduction to web development</p>
          </div>
       
        </Carousel>

 
      </Container>
    </div>
  );
};

export default Certifications;
