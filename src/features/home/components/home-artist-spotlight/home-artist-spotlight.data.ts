export interface HomeArtistSpotlightArtist {
  nameLines: string[];
  image: string;
  alt: string;
  bio: string;
}

export const artists: HomeArtistSpotlightArtist[] = [
  {
    nameLines: ["BLACK", "MOONS"],
    image: "/images/artist-spotlight/black-moons.jpg",
    alt: "High-contrast portrait of a heavy metal artist, Black Moons",
    bio: "Forged in the underground scenes of Scandinavia, Black Moons brings a visceral, unapologetic aesthetic to the HORDE collection. Their designs are raw incantations, violently etched onto cotton.",
  },
  {
    nameLines: ["SKULL", "FUCKERS"],
    image: "/images/artist-spotlight/skullfuckers.jpg",
    alt: "High-contrast portrait of a heavy metal artist, SkullFuckers",
    bio: "Born in the catacombs of Eastern Europe, SkullFuckers drags skull and bone iconography out of the crypts and onto black cotton. Every piece is a memento mori, a reminder that the noise fades but the metal lives on.",
  },
  {
    nameLines: ["AETHERIAL", "VORTEX"],
    image: "/images/artist-spotlight/aetherial-vortex.jpg",
    alt: "High-contrast portrait of a heavy metal artist, Aetherial Vortex",
    bio: "From the graveyards of Victorian England, Aetherial Vortex weaves gothic delicacy through brutalist design. Frail wings, sharpened steel — beauty and brutality in equal measure.",
  }
];