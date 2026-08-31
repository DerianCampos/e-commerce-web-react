interface Product {
  name: string;
  price: string;
  image: string;
  badge?: { label: string; variant: "paper" | "blood" };
}

const productImages = {
  voidScreamer:
    "/images/t-shirts/void-screamer.jpg",
  ironRitual:
    "/images/t-shirts/iron-ritual.jpg",
  abyssalThrash:
    "/images/t-shirts/abyssal-thrash.jpg",
  blackenedSoul:
    "/images/t-shirts/blackened-soul.jpg",
} as const;

export const products: Product[] = [
  {
    name: "VOID SCREAMER",
    price: "$35.00",
    image: productImages.voidScreamer,
    badge: { label: "NEW", variant: "paper" },
  },
  {
    name: "IRON RITUAL",
    price: "$35.00",
    image: productImages.ironRitual,
  },
  {
    name: "ABYSSAL THRASH",
    price: "$40.00",
    image: productImages.abyssalThrash,
    badge: { label: "LOW STOCK", variant: "blood" },
  },
  {
    name: "BLACKENED SOUL",
    price: "$30.00",
    image: productImages.blackenedSoul,
  },
];