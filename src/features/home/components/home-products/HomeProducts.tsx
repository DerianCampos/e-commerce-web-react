import { useEffect, useRef, useState } from "react";
import { Button } from "antd";
import { useScrollReveal } from "@/features/home/hooks/use-scroll-reveal";
import { products } from "./home-products.data";
import styles from "./home-products.module.scss";

/** One marquee loop duration; the track advances one group width per loop. */
const MARQUEE_DURATION_MS = 60000;
const MIN_REPEATS = 3;

const HomeProducts: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLElement>();
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const [repeats, setRepeats] = useState(MIN_REPEATS);
  const [marqueeUnit, setMarqueeUnit] = useState(0);

  useEffect(() => {
    const container = marqueeRef.current;
    const firstGroup = groupRef.current;
    if (!container || !firstGroup) return;

    const measure = () => {
      const unit = Math.round(firstGroup.getBoundingClientRect().width);
      if (unit <= 0) return;
      const count = Math.max(
        MIN_REPEATS,
        Math.ceil(container.clientWidth / unit) + 1,
      );
      setMarqueeUnit(unit);
      setRepeats(count);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Drive the loop with the Web Animations API so the per-loop distance is an
  // exact measured value, keeping the seam seamless in every browser (incl. Safari).
  useEffect(() => {
    const track = trackRef.current;
    if (!track || marqueeUnit <= 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const animation = track.animate(
      [
        { transform: "translateX(0px)" },
        { transform: `translateX(${-marqueeUnit}px)` },
      ],
      { duration: MARQUEE_DURATION_MS, iterations: Infinity, easing: "linear" },
    );

    const pause = () => animation.pause();
    const play = () => animation.play();
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", play);

    return () => {
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", play);
      animation.cancel();
    };
  }, [marqueeUnit]);

  const marqueeGroups = Array.from({ length: repeats }, () => products);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.heading} data-reveal>
        <h2>LATEST ARRIVALS</h2>
        <a href="#latest" className={styles.viewAll}>
          <span>VIEW ALL</span>
          <span className={styles.viewAllArrow}>→</span>
        </a>
      </div>
      <div className={styles.marquee} data-reveal ref={marqueeRef}>
        <div className={styles.track} ref={trackRef}>
          {marqueeGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={styles.group}
              ref={groupIndex === 0 ? groupRef : undefined}
              aria-hidden={groupIndex > 0}
            >
              {group.map((product) => (
                <article key={product.name} className={styles.card}>
                  <div className={styles.cardMedia}>
                    <img
                      src={product.image}
                      alt={`${product.name} t-shirt`}
                      className={styles.cardImage}
                    />
                    {product.badge && (
                      <span
                        className={`${styles.badge} ${
                          product.badge.variant === "paper"
                            ? styles.badgePaper
                            : styles.badgeBlood
                        }`}
                      >
                        {product.badge.label}
                      </span>
                    )}
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{product.name}</h3>
                    <p className={styles.cardPrice}>{product.price}</p>
                    <Button
                      type="default"
                      block
                      className={styles.addToCart}
                      tabIndex={groupIndex > 0 ? -1 : undefined}
                    >
                      ADD TO CART
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;