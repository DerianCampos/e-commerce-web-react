import { useEffect, useState } from "react";
import { Button } from "antd";
import { useScrollReveal } from "@/features/home/hooks/use-scroll-reveal";
import { artists } from "./home-artist-spotlight.data";
import styles from "./home-artist-spotlight.module.scss";

const ARTIST_DURATION_MS = 10000;

const HomeArtistSpotlight: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLElement>();
  const [activeIndex, setActiveIndex] = useState(0);

  const advance = (direction: number) => {
    setActiveIndex(
      (current) => (current + direction + artists.length) % artists.length,
    );
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => advance(1), ARTIST_DURATION_MS);
    return () => window.clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className={styles.section} id="artists" ref={sectionRef}>
      <div className={styles.slides}>
        {artists.map((artist, index) => (
          <div
            key={artist.nameLines.join(" ")}
            className={`${styles.slide}${
              index === activeIndex ? ` ${styles.slideActive}` : ""
            }`}
            aria-hidden={index !== activeIndex}
          >
            <div className={styles.mediaGroup}>
              <div
                className={styles.portrait}
                style={{ backgroundImage: `url(${artist.image})` }}
                role="img"
                aria-label={artist.alt}
              />
            </div>
            <div className={styles.content} data-reveal>
              <p className={styles.eyebrow}>ARTIST SPOTLIGHT</p>
              <h2 className={styles.artistName}>
                {artist.nameLines.map((line, lineIndex) => (
                  <span key={line}>
                    {line}
                    {lineIndex < artist.nameLines.length - 1 && <br />}
                  </span>
                ))}
              </h2>
              <p className={styles.bio}>{artist.bio}</p>
              <Button
                type="default"
                className={styles.cta}
                tabIndex={index === activeIndex ? undefined : -1}
              >
                VIEW COLLECTION
              </Button>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowPrev}`}
        aria-label="Previous artist"
        onClick={() => advance(-1)}
      >
        ‹
      </button>
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowNext}`}
        aria-label="Next artist"
        onClick={() => advance(1)}
      >
        ›
      </button>
    </section>
  );
};

export default HomeArtistSpotlight;