/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      special: ["Lily Script One"],
      jakarta: ["Plus Jakarta Sans Variable"],
      jetbrains: ['"JetBrains Mono Variable"'],
    },
    colors: {
      seasalt: "#F9F9F9",
      offWhite: "#cbd5e1",
      darkestblue: "#13151a",
      bluegrey: "#4E5D64",
      bluegreen: "#95B1B0",
      oldrose: "#C98986",
      bittersweet: "##FF715B",
      engineeringorange: "#C03221",
      persianred: "#CC2936",
    },
  },
  plugins: [],
};
