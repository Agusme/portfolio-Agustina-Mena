import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { useMemo } from "react";
import OptimizedCarousel from "./OptimizedCarousel";
import CustomDot from "./CustomDot";
import CarouselArrow from "./CarouselArrow";

export default function CarouselComponent({ title, items }) {
  const responsive = useMemo(
    () => ({
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
    }),
    []
  );

  return (
    <div className="bg-projects py-4 px-2 text-green-dark">
      <Fade>
        <Container fluid>
          <h2 className="fw-bold fs-1 text-center uniform-h2">{title}</h2>
          <OptimizedCarousel
            containerClass="certification-carousel"
            customTransition="all .5s"
            infinite
            showDots={true}
            customDot={<CustomDot />}
            customLeftArrow={<CarouselArrow direction="left" />}
            customRightArrow={<CarouselArrow direction="right" />}
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="certification-carousel-item"
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="certification-card cursor-pointer d-flex flex-column text-center align-items-center"
              >
                <figure className="certification-img-frame">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="certification-img"
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                  />
                </figure>
                <h3 className="text-center fw-bold fs-6">{item.institution}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </OptimizedCarousel>
        </Container>
      </Fade>
    </div>
  );
}
