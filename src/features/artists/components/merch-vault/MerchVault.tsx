import { useEffect, useMemo, useState } from "react";
import { type Band, type Tee } from "@/features/artists/data/artists.data";
import TeeCard from "./TeeCard";
import styles from "./merch-vault.module.scss";

interface MerchItem {
  tee: Tee;
  band: Band;
  bandName: string;
}

interface MerchVaultProps {
  band?: Band;
  tees?: MerchItem[];
}

const ITEMS_PER_PAGE = 6;

/**
 * Section 4 — Exclusive t-shirt merchandise vault.
 */
const MerchVault: React.FC<MerchVaultProps> = ({ band, tees: teesProp }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const tees = useMemo(() => {
    if (teesProp) {
      return teesProp;
    }
    if (band) {
      return band.tshirts.map((tee) => ({
        tee,
        band,
        bandName: band.name,
      }));
    }
    return [];
  }, [band, teesProp]);

  useEffect(() => {
    setCurrentPage(1);
  }, [teesProp, band]);

  const totalPages = Math.ceil(tees.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedTees = tees.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.grid}>
          {paginatedTees.map((item, index) => (
            <TeeCard key={`${item.band.id}-${item.tee.id}-${index}`} tee={item.tee} bandName={item.bandName} band={item.band} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              type="button"
              className={styles.pageButton}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              PREVIOUS
            </button>
            <div className={styles.pageNumbers}>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  className={`${styles.pageNumber} ${
                    currentPage === page ? styles.pageNumberActive : ""
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              type="button"
              className={styles.pageButton}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              NEXT
            </button>
          </div>
        )}

        <div className={styles.dispatch}>
          <div className={styles.dispatchInfo}>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M3 7h11v9H3V7Zm11 3h4l3 3v3h-7v-6ZM7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>
              GLOBAL ARMORED DISPATCH • HEAVYWEIGHT 240+ GSM COTTON APPAREL
            </span>
          </div>
          <a href="#sizing-dispatch" className={styles.dispatchLink}>
            <span>SIZING &amp; DISPATCH DETAILS</span>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M4 12h16m0 0-6-6m6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MerchVault;