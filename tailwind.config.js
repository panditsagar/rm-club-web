/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0054A6",
        "primary-dark": "#003366",
        accent: "#FFD200",
        "gray-bg": "#F5F7FA",
        "text-main": "#333333",
      },
    },
  },
  plugins: [],
};
