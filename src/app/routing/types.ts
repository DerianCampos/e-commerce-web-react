import type { ReactNode } from "react";

/** Route configuration used by AppRouter */
export interface RouteConfig {
  /** URL path pattern */
  path: string;
  /** The page/component to render */
  element: ReactNode;
}
