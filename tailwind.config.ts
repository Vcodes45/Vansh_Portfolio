import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)"],
        mono: ["var(--font-dm-mono)"],
        jakarta: ["var(--font-jakarta)"],
      },
      colors: {
        lime: "#CCFF00",
        "lime-dim": "#a8d400",
        crimson: "#FF3B3B",
        bg: "#050505",
        surface: "#0d0d0d",
        glass: "rgba(255,255,255,0.04)",
        border: "rgba(255,255,255,0.08)",
        muted: "#555566",
        dim: "#888899",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-14px) rotate(1deg)" },
          "66%": { transform: "translateY(-6px) rotate(-1deg)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "spin-rev": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        "pulse-lime": {
          "0%,100%": { boxShadow: "0 0 0px 0px rgba(204,255,0,0)" },
          "50%": { boxShadow: "0 0 40px 8px rgba(204,255,0,0.25)" },
        },
        glitch: {
          "0%,100%": { clipPath: "inset(0 0 100% 0)", transform: "translateX(0)" },
          "20%": { clipPath: "inset(20% 0 60% 0)", transform: "translateX(-4px)" },
          "40%": { clipPath: "inset(60% 0 20% 0)", transform: "translateX(4px)" },
          "60%": { clipPath: "inset(40% 0 40% 0)", transform: "translateX(-2px)" },
          "80%": { clipPath: "inset(80% 0 5% 0)", transform: "translateX(2px)" },
        },
        "slide-right": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "counter-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "border-spin": {
          "0%": { "--border-angle": "0deg" },
          "100%": { "--border-angle": "360deg" },
        },
        "bg-shift": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-in": "fade-in 0.6s ease forwards",
        marquee: "marquee 30s linear infinite",
        "marquee-rev": "marquee-rev 25s linear infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 25s linear infinite",
        "spin-rev": "spin-rev 18s linear infinite",
        "pulse-lime": "pulse-lime 3s ease-in-out infinite",
        "slide-right": "slide-right 0.6s cubic-bezier(0.22,1,0.36,1) forwards",
        shimmer: "shimmer 2.5s linear infinite",
        "bg-shift": "bg-shift 6s ease infinite",
        "scale-in": "scale-in 0.5s cubic-bezier(0.22,1,0.36,1) forwards",
      },
      backgroundSize: {
        "300%": "300% 300%",
      },
    },
  },
  plugins: [],
};
export default config;
