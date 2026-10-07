import { ConfigProvider, theme as antTheme } from "antd";
import type { ReactNode } from "react";
import { brandThemeTokens } from "./theme-tokens";

interface AntDesignConfigProps {
  children: ReactNode;
}

/**
 * Wraps children with Ant Design ConfigProvider using the
 * HORDE MERCH brutalist dark design tokens.
 */
const AntDesignConfig: React.FC<AntDesignConfigProps> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        ...brandThemeTokens,
        algorithm: antTheme.darkAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntDesignConfig;