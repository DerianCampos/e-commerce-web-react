import type { Band } from "@/features/artists/data/artists.data";
import styles from "./band-spotlight.module.scss";

interface BandSpotlightProps {
  band: Band;
}

/**
 * Section 3 — Dynamic band showcase banner. Background image is
 * rendered at low opacity under a left-to-right gradient overlay,
 * content follows the active band selection.
 */
const BandSpotlight: React.FC<BandSpotlightProps> = ({ band }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div
            className={styles.bg}
            style={{ backgroundImage: `url(${band.bg})` }}
            aria-hidden
          />
          <div className={styles.overlay} aria-hidden />

          <div className={styles.content}>
            <div className={styles.copy}>
              <p className={styles.meta}>
                GENRE: {band.genre} <span className={styles.metaDot}>•</span>{" "}
                ORIGIN: {band.origin}
              </p>
              <h2 className={styles.title} data-active-band={band.id}>
                {band.name}
              </h2>
              <p className={styles.description}>{band.description}</p>
              <div className={styles.facts}>
                <span className={styles.fact}>{band.album}</span>
                <span className={styles.fact}>
                  {band.tshirts.length} EXCLUSIVE T-SHIRTS
                </span>
              </div>
            </div>

            <button type="button" className={styles.follow}>
              + FOLLOW BAND
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BandSpotlight;