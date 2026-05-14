/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ['"Literata"', "Georgia", "serif"],
        sans: ['"Noto Sans SC"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        base: ["1.125rem", { lineHeight: "1.75" }],
        sm: ["1rem", { lineHeight: "1.65" }],
        lg: ["1.25rem", { lineHeight: "1.65" }],
        xl: ["1.375rem", { lineHeight: "1.55" }],
        "2xl": ["1.5rem", { lineHeight: "1.45" }],
        "3xl": ["1.875rem", { lineHeight: "1.35" }],
        "display-hero": ["clamp(2.625rem, 5vw, 3.625rem)", { lineHeight: "1.08", letterSpacing: "-0.024em", fontWeight: "600" }],
        "display-xl": ["clamp(2.75rem,6vw,4.25rem)", { lineHeight: "1.04", letterSpacing: "-0.025em", fontWeight: "600" }],
        "display-lg": ["clamp(1.875rem,3.2vw,2.5rem)", { lineHeight: "1.12", letterSpacing: "-0.02em", fontWeight: "600" }],
      },
      colors: {
        canvas: {
          DEFAULT: "#f8f6f1",
          ink: "#141418",
        },
        surface: {
          DEFAULT: "#efede7",
          dark: "#17171e",
        },
        accent: {
          DEFAULT: "#4338ca",
          light: "#a5b4fc",
          muted: "#312e81",
          faint: "rgba(67, 56, 202, 0.11)",
        },
      },
      boxShadow: {
        card: "0 1px 0 rgba(20, 20, 24, 0.05), 0 10px 28px -12px rgba(20, 20, 24, 0.1)",
        "card-dark": "0 1px 0 rgba(255, 255, 255, 0.04), 0 12px 36px -10px rgba(0, 0, 0, 0.55)",
        "card-hover": "0 2px 0 rgba(67, 56, 202, 0.06), 0 22px 48px -14px rgba(67, 56, 202, 0.16)",
        "card-hover-dark": "0 2px 0 rgba(165, 180, 252, 0.08), 0 24px 56px -12px rgba(0, 0, 0, 0.65)",
      },
      backgroundImage: {
        "mesh-light":
          "radial-gradient(95% 85% at 92% 0%, rgba(67, 56, 202, 0.09), transparent 52%), radial-gradient(65% 50% at 0% 100%, rgba(120, 53, 15, 0.04), transparent 48%)",
        "mesh-dark":
          "radial-gradient(85% 65% at 88% 0%, rgba(165, 180, 252, 0.1), transparent 52%), radial-gradient(55% 45% at 0% 100%, rgba(67, 56, 202, 0.07), transparent 55%)",
      },
    },
  },
  plugins: [],
};
