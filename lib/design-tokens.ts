// e:/panaversity/hackathon-0/lib/design-tokens.ts

/**
 * Cyberpunk UI Design System — extracted from UI Pro Max Search.
 * Using Matrix Green, Magenta, and Cyan accents on Tech Noir Dark.
 */
export const designTokens = {
  colors: {
    background: "#0D0D0D",
    foreground: "#FFFFFF",
    primary: "#00FF00", // Matrix Green
    secondary: "#FF00FF", // Magenta
    accent: "#00FFFF",    // Cyan
    muted: "#1A1A1A",
    border: "#333333",
  },
  typography: {
    fontSans: "'Inter', sans-serif",
    fontMono: "'JetBrains Mono', monospace",
  },
  animations: {
    glow: "0 0 10px rgba(0, 255, 0, 0.5)",
    transition: "all 0.2s ease-in-out",
  }
} as const;
