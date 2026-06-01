import "./CertificationSkeleton.css";

export default function CertificationSkeletonComponent() {
  return (
    <div className="certification-skeleton" aria-hidden="true">
      {/* Imagen placeholder */}
      <div className="certification-skeleton-img">
        <div className="placeholder-glow" style={{ height: "100%" }}>
          <span
            className="placeholder"
            style={{ display: "block", height: "100%" }}
          ></span>
        </div>
      </div>

      {/* Texto placeholder */}
      <div className="certification-skeleton-text">
        <h3 className="placeholder-glow">
          <span className="placeholder col-8"></span>
        </h3>
        <p className="placeholder-glow mt-2">
          <span className="placeholder col-10"></span>
        </p>
      </div>
    </div>
  );
}
