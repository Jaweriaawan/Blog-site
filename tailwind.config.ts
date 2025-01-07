import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadowColor: {
        'grays' : '0 4px 6px rgba(0, 0, 0, 0.5)',
        'blackish': '0 6px 10px rgba(0, 0, 0, 0.8)',
      },
      screens: {
         'ex' : '270px'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
