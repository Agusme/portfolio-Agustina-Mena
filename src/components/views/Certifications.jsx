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
    <div className="bg-projects py-4 px-2 text-green-dark" id="certifications">
      <Fade>
        <Container>
          <h2 className="fw-bold fs-1 text-center">
            {t("certificationTittle")}{" "}
          </h2>
          <Carousel
            customTransition="all .5"
            infinite={true}
            responsive={responsive}
            className="pt-5 bg-glass "
          >
            {itemsCertifaction.map((item) => (
              <div className="cursor-pointer d-flex flex-column text-center gap-3">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="img-fluid img-fixed object-fit-cover mx-2"
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
