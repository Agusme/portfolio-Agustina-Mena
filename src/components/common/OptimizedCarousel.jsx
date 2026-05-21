import React, { useState, useEffect, useRef, useMemo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./OptimizedCarousel.css";

/**
 * OptimizedCarousel - Wrapper para reducir reflows forzados
 * - Usa CSS Containment para limitar reflows al contenedor
 * - Lazy-inicia el carousel solo cuando es visible
 * - Memoiza la config responsive para evitar recálculos
 */
const OptimizedCarousel = React.memo(
  ({
    children,
    responsive,
    className,
    containerClass,
    customDot,
    customLeftArrow,
    customRightArrow,
    showDots = true,
    infinite = true,
    customTransition = "all .5s",
    removeArrowOnDeviceType = [],
    itemClass = "carousel-item",
    ...props
  }) => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);
    const observerRef = useRef(null);

    // Memoiza la configuración responsive para evitar recálculos
    const memoizedResponsive = useMemo(
      () => responsive,
      [JSON.stringify(responsive)],
    );

    // Intersection Observer para lazy-load del carousel
    useEffect(() => {
      const element = containerRef.current;
      if (!element) return;

      // Solo crear observer si el carousel no es visible aún
      if (isVisible) return;

      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              // Dejar de observar una vez que se carga
              if (observerRef.current) {
                observerRef.current.unobserve(element);
              }
            }
          });
        },
        {
          rootMargin: "50px", // Comienza a cargar 50px antes de ser visible
          threshold: 0.1,
        },
      );

      observerRef.current.observe(element);

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }, [isVisible]);

    return (
      <div
        ref={containerRef}
        style={{
          // CSS Containment - limita reflows/repaints a este contenedor
          contain: "layout style paint",
          willChange: "contents",
        }}
        className={className}
      >
        {isVisible ? (
          <Carousel
            containerClass={containerClass}
            customTransition={customTransition}
            infinite={infinite}
            showDots={showDots}
            customDot={customDot}
            customLeftArrow={customLeftArrow}
            customRightArrow={customRightArrow}
            responsive={memoizedResponsive}
            removeArrowOnDeviceType={removeArrowOnDeviceType}
            itemClass={itemClass}
            shouldResetAutoplay={false}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            {...props}
          >
            {children}
          </Carousel>
        ) : (
          // Placeholder para mantener el espacio
          <div
            style={{
              minHeight: "300px",
              background: "transparent",
            }}
            role="status"
            aria-label="Cargando carrusel"
          />
        )}
      </div>
    );
  },
);

OptimizedCarousel.displayName = "OptimizedCarousel";

export default OptimizedCarousel;
