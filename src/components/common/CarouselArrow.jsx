const CarouselArrow = ({ onClick, direction }) => {
  const isLeft = direction === "left";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`react-multiple-carousel__arrow react-multiple-carousel__arrow--${
        isLeft ? "left" : "right"
      }`}
      aria-label={isLeft ? "Ver elemento anterior" : "Ver elemento siguiente"}
    />
  );
};

export default CarouselArrow;
