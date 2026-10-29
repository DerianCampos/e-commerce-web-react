import type { RouteConfig } from "@/app/routing/types";
import { lazyLoad } from "@/app/routing/lazy-loader";

const ArtistsPage = lazyLoad(() => import("@/features/artists/pages"));

export const artistsRoutes: RouteConfig[] = [
  {
    path: "/artists",
    element: ArtistsPage,
  },
];