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
    },
    extend: {
      backgroundImage: {
        "wavy-pattern-w-to-b": "url('/src/assets/layered-waves-haikei.svg')",
      },
    },
  },
  plugins: [],
};
