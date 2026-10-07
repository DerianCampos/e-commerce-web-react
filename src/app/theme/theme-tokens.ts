import type { ThemeConfig } from "antd";

/**
 * Ant Design theme token overrides for the HORDE MERCH storefront.
 * Based on the Stitch design system "Obsidian & Iron":
 * dark brutalist, strict sharp corners, blood-red CTAs.
 */
export const brandThemeTokens: ThemeConfig = {
  token: {
    // ── Brand Colors ──────────────────────────────────────
    colorPrimary: "#8b0000",
    colorPrimaryHover: "#ffb4a8",
    colorPrimaryActive: "#6b0000",
    colorPrimaryBg: "rgba(139, 0, 0, 0.25)",

    // ── Neutral Colors ────────────────────────────────────
    colorBgContainer: "#1c1b1b",
    colorBgLayout: "#131313",
    colorBgElevated: "#20201f",
    colorBorder: "#4c4546",
    colorBorderSecondary: "#4c4546",

    // ── Text Colors ───────────────────────────────────────
    colorText: "#e5e2e1",
    colorTextSecondary: "#cfc4c5",
    colorTextPlaceholder: "#988e90",

    // ── Semantic Colors ───────────────────────────────────
    colorSuccess: "#73d13d",
    colorWarning: "#d89614",
    colorError: "#ff4d4f",
    colorInfo: "#1677ff",

    // ── Typography ────────────────────────────────────────
    fontFamily:
      '"Archivo Narrow", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: 16,
    lineHeight: 1.5,

    // ── Border Radius — strictly sharp ────────────────────
    borderRadius: 0,
    borderRadiusLG: 0,
    borderRadiusSM: 0,

    // ── Sizing ────────────────────────────────────────────
    controlHeight: 40,
    controlOutlineWidth: 1,
  },
  components: {
    Layout: {
      headerBg: "#131313",
      bodyBg: "#131313",
      footerBg: "#0e0e0e",
    },
    Button: {
      borderRadius: 0,
      fontWeight: 400,
      primaryShadow: "none",
      defaultShadow: "none",
    },
    Card: {
      borderRadiusLG: 0,
      colorBorderSecondary: "#4c4546",
    },
    Menu: {
      itemBorderRadius: 0,
      itemHeight: 40,
      itemMarginInline: 0,
      itemColor: "#e5e2e1",
      itemHoverColor: "#ffb4a8",
    },
    Input: {
      borderRadius: 0,
    },
    Tag: {
      borderRadiusSM: 0,
    },
    Alert: {
      borderRadiusLG: 0,
    },
    Modal: {
      borderRadiusLG: 0,
    },
  },
};

/** Alias kept for compatibility with future light/dark switching. */
export const lightThemeTokens: ThemeConfig = brandThemeTokens;

/** Dark theme — same brutalist palette. */
export const darkThemeTokens: ThemeConfig = brandThemeTokens;