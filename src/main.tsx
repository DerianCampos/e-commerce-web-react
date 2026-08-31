import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "@fontsource/anton/400.css";
import "@fontsource/archivo-narrow/400.css";
import "@fontsource/archivo-narrow/600.css";
import "@fontsource/archivo-narrow/700.css";
import "@fontsource/jetbrains-mono/500.css";
import AntDesignConfig from "@/app/theme/ant-design-config";
import App from "@/app/App";
import { store } from "@/app/store/store";
import "@/styles/global.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AntDesignConfig>
        <App />
      </AntDesignConfig>
    </Provider>
  </StrictMode>,
);
