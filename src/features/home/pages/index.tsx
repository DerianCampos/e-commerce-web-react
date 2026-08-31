import { Fragment } from "react";
import { HomeHero } from "@/features/home/components/home-hero";
import { HomeProducts } from "@/features/home/components/home-products";
import { HomeArtistSpotlight } from "@/features/home/components/home-artist-spotlight";

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <HomeHero />
      <HomeProducts />
      <HomeArtistSpotlight />
    </Fragment>
  );
};

export default HomePage;