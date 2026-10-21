import { useMemo, useState } from "react";
import { ArtistsHero } from "@/features/artists/components/artists-hero";
import { BandSearch } from "@/features/artists/components/band-search";
import { MerchVault } from "@/features/artists/components/merch-vault";
import {
  BAND_IDS,
  BANDS,
  getBandMatch,
  type BandId,
} from "@/features/artists/data/artists.data";

const DEFAULT_BAND_ID: BandId = "death-weaver";

/**
 * Artists roster page (HORDE MERCH // ARTIST ROSTER).
 */
const ArtistsPage: React.FC = () => {
  const [activeBandId, setActiveBandId] = useState<BandId>(DEFAULT_BAND_ID);
  const [bandQuery, setBandQuery] = useState("");

  const handleBandQueryChange = (value: string) => {
    setBandQuery(value);
    const { matched } = getBandMatch(value);
    if (matched) setActiveBandId(matched);
  };

  const handleQuickSelect = (bandId: BandId) => {
    setBandQuery(BANDS[bandId].name);
    setActiveBandId(bandId);
  };

  const handleResetSearch = () => {
    setBandQuery("");
    setActiveBandId(DEFAULT_BAND_ID);
  };

  const allTees = useMemo(() => {
    const tees: Array<{ tee: any; band: any; bandName: string }> = [];
    let count = 0;
    for (const id of BAND_IDS) {
      for (const tee of BANDS[id].tshirts.slice(0, 2)) {
        if (count >= 10) break;
        tees.push({
          tee,
          band: BANDS[id],
          bandName: BANDS[id].name,
        });
        count++;
      }
      if (count >= 10) break;
    }
    return tees;
  }, []);

  const filteredTees = useMemo(() => {
    const q = bandQuery.trim().toLowerCase();
    if (!q) return allTees;
    const { matched } = getBandMatch(bandQuery);
    return allTees.filter((item) => {
      const matchesBand = matched ? item.band.id === matched : false;
      const matchesProduct = item.tee.name.toLowerCase().includes(q);
      return matchesBand || matchesProduct;
    });
  }, [bandQuery, allTees]);

  return (
    <>
      <ArtistsHero />
      <BandSearch
        bandQuery={bandQuery}
        activeBandId={activeBandId}
        onBandQueryChange={handleBandQueryChange}
        onQuickSelect={handleQuickSelect}
        onReset={handleResetSearch}
      />
      <MerchVault tees={filteredTees} />
    </>
  );
};

export default ArtistsPage;