/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        indivisible: ["indivisible"]
      }, 
      fontWeight: {
        normal: 400, // Set the normal font weight (default)
      },
      fontStyle: {
        normal: "normal", // You can use `normal` in Tailwind as a class
      },
    },
  },
  plugins: [],
};
