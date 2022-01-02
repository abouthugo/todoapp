module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "border-red-600",
    "stroke-red-500",
    "fill-red-500",
    "bg-red-50",
    "border-orange-600",
    "stroke-orange-500",
    "fill-orange-500",
    "bg-orange-50",
    "border-indigo-600",
    "stroke-indigo-500",
    "fill-indigo-500",
    "bg-indigo-50",
    "border-neutral-600",
    "stroke-neutral-500",
    "stroke-neutral-200",
    "bg-neutral-50",
  ],
  theme: {
    extend: {
      transitionProperty: {
        transform: "transform, margin, padding, width",
      },
    },
  },
  plugins: [],
};
