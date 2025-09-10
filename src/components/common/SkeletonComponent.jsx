export default function SkeletonComponent() {
  return (
    <div className="card bg-glass border-0 mx-auto" aria-hidden="true">
      <h5 className="card-title placeholder-glow text-center">
        <span className="placeholder col-10 my-2"></span>
      </h5>
      <svg
        className="bd-placeholder-img card-img-top"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <rect width="100%" height="100%" fill="#90959aff"></rect>
      </svg>
      <div className="card-body">
        <h5 className="card-title text-center placeholder-glow">
          <span className="placeholder col-8 "></span>
        </h5>
      </div>
    </div>
  );
}
