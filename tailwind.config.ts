import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "princess-sofia": "var(--font-princess-sofia)",
        "fontdiner-swanky": "var(--font-fontdiner-swanky)",
        "outfit": "var(--font-outfit)"
      },
    },
  },
  plugins: [],
} satisfies Config;


