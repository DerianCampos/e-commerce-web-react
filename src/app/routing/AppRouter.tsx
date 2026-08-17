import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout } from "@/app/layouts/public-layout";
import { routeConfigs } from "./routes";

/**
 * Application router.
 * All routes use PublicLayout (header + content + footer).
 */
const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          {routeConfigs.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
