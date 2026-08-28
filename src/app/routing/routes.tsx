import type { RouteConfig } from "./types";
import { homeRoutes } from "@/features/home/routes";
import { lazyLoad } from "./lazy-loader";

const NotFoundPage = lazyLoad(() => import("@/shared/pages/not-found"));

/**
 * Centralized route configuration.
 * Order matters: specific paths first, catch-all last.
 */
export const routeConfigs: RouteConfig[] = [
  ...homeRoutes,
  {
    path: "*",
    element: NotFoundPage,
  },
];
