import { lazy, Suspense } from "react";
import type { ComponentType } from "react";
import { Spin } from "antd";

/**
 * Wraps React.lazy with a Suspense fallback.
 * Usage: `lazyLoad(() => import("@/features/home/pages"))`
 */
export function lazyLoad(
  importer: () => Promise<{ default: ComponentType }>,
): React.ReactNode {
  const LazyComponent = lazy(importer);
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 400,
          }}
        >
          <Spin size="large" />
        </div>
      }
    >
      <LazyComponent />
    </Suspense>
  );
}
