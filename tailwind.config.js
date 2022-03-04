module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pack-train': "url('/public/img/bigImg.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}