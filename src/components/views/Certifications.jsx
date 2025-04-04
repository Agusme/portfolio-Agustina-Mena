import React from "react";

import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import { itemsCertifaction } from "../../data/db";
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
            {itemsCertifaction.map((item) => (
              <div className="text-center container">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="img-fluid w-100 p-3"
                />
                <h6 className="text-center fw-bold">{item.institution} </h6>
                <p>{item.description} </p>
              </div>
            ))}
          </Carousel>
        </Container>
      </Fade>
    </div>
  );
};

export default Certifications;
