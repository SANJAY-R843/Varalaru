import { useState } from "react";
import "./AccordionGallery.css";

function AccordionGallery({
  items,
  defaultIndex = 0,
  expandRatio = 0.52,
  trigger = "hover",
  accentColor = "#ffffff",
  overlayColor = "#060010",
  textColor = "#ffffff",
  grayscale = false,
  showLabels = true,
  duration = 0.6,
  ease = "power3.out",
  parallax = 0.5,
  tilt = 8,
  stagger = 0.06,
  height = 460,
  gap = 10,
  radius = 16,
  orientation = "horizontal",
  onSelect,
}) {
  const [activeIndex, setActiveIndex] = useState(null);
  const transition = `${duration}s ${ease === "power3.out" ? "cubic-bezier(0.22, 1, 0.36, 1)" : "ease"}`;
  const isHorizontal = orientation === "horizontal";
  const inactiveRatio = (1 - expandRatio) / Math.max(items.length - 1, 1);

  return (
    <div
      className={`accordion-gallery ${isHorizontal ? "is-horizontal" : "is-vertical"}`}
      onMouseLeave={() => setActiveIndex(null)}
      style={{
        "--accent-color": accentColor,
        "--overlay-color": overlayColor,
        "--text-color": textColor,
        "--expand-ratio": expandRatio,
        "--inactive-ratio": inactiveRatio,
        "--gallery-height": `${height}px`,
        "--gallery-gap": `${gap}px`,
        "--gallery-radius": `${radius}px`,
        "--gallery-transition": transition,
        "--gallery-parallax": parallax,
        "--gallery-tilt": `${tilt}deg`,
        "--gallery-stagger": `${stagger}s`,
      }}
    >
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        const handleActivate = () => setActiveIndex(index);
        const handleSelect = () => {
          handleActivate();
          onSelect?.(item);
        };

        return (
          <button
            type="button"
            className={`accordion-slide ${isActive ? "is-active" : ""}`}
            key={item.label}
            aria-label={`View ${item.label}: ${item.subtitle}`}
            aria-pressed={isActive}
            onMouseEnter={trigger === "hover" ? handleActivate : undefined}
            onFocus={handleActivate}
            onClick={handleSelect}
            style={{ "--slide-index": index }}
          >
            <img
              src={item.image}
              alt={item.label}
              loading={index === defaultIndex ? "eager" : "lazy"}
              decoding="async"
              referrerPolicy="no-referrer"
              className={grayscale ? "is-grayscale" : ""}
            />
            <span className="accordion-shade" />
            {showLabels && (
              <span className={`card-bottom ${isActive ? "is-content-visible" : ""}`}>
                <span className="card-info">
                  <span className="accordion-number">0{index + 1}</span>
                  <span>
                    <strong>{item.label}</strong>
                    <small>{item.subtitle}</small>
                  </span>
                </span>
                <small className="card-timeline">{item.date}</small>
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default AccordionGallery;
