import { useEffect, useState } from "react";
import {
  type Tee,
  type TeeSize,
  type Band,
} from "@/features/artists/data/artists.data";
import styles from "./merch-vault.module.scss";

interface TeeCardProps {
  tee: Tee;
  bandName: string;
  band: Band;
}

const ADDED_RESET_MS = 1400;

const ADD_TO_CART_TEXT = "ADD TO CART";
const ADDED_TEXT = "ADDED TO CART";

/**
 * Single t-shirt card: tag badge, mock merch label, price,
 * size picker (L selected by default when available) and an
 * ADD TO CART micro-interaction.
 */
const TeeCard: React.FC<TeeCardProps> = ({ tee, bandName }) => {
  const defaultSize: TeeSize = tee.sizes.includes("L") ? "L" : tee.sizes[0];
  const [selectedSize, setSelectedSize] = useState<TeeSize>(defaultSize);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const timer = window.setTimeout(() => setAdded(false), ADDED_RESET_MS);
    return () => window.clearTimeout(timer);
  }, [added]);

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <span className={styles.tag}>{bandName}</span>
        <div className={styles.imageWrap}>
          <img
            src={tee.image}
            alt={tee.name}
            className={styles.image}
            loading="lazy"
          />
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.copy}>
          <h3 className={styles.teeName}>{tee.name}</h3>
          <p className={styles.teeDesc}>{tee.desc}</p>
        </div>

        <div className={styles.buy}>
          <div className={styles.buyRow}>
            <span className={styles.price}>${tee.price.toFixed(2)}</span>
            <div className={styles.sizes} role="group" aria-label="Size">
              {(["S", "M", "L"] as const).map((size) => {
                const available = tee.sizes.includes(size);
                if (!available) {
                  return (
                    <button
                      key={size}
                      type="button"
                      className={`${styles.size} ${styles.sizeDisabled}`}
                      disabled
                      aria-label={`${size} unavailable`}
                    >
                      {size}
                    </button>
                  );
                }
                return (
                  <button
                    key={size}
                    type="button"
                    className={`${styles.size}${
                      selectedSize === size ? ` ${styles.sizeActive}` : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
          <button
            type="button"
            className={`${styles.cart}${added ? ` ${styles.cartAdded}` : ""}`}
            onClick={() => setAdded(true)}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden>
              {added ? (
                <path
                  d="m5 12.5 4.5 4.5L19 7.5"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 5h2l3 11h8l2.5-8H8M17 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
            <span>{added ? ADDED_TEXT : ADD_TO_CART_TEXT}</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default TeeCard;