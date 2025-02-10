/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img":
          "url('https://www.igsas.com.tr/uploads/banners/banner_igsas_ure-2.jpg?version=07012025080818')",
        agricultural:
          "url('https://www.igsas.com.tr/uploads/product-categories/agricultural.png')",
        industrial:
          "url('https://www.igsas.com.tr/uploads/product-categories/industrial.jpg')",
        "stats-bg":
          "url('https://www.igsas.com.tr/assets/images/main/pattern-bg.svg')",
        article1:
          "url('https://www.igsas.com.tr/uploads/news/18--07-2024/103a9ec8-22c5-4d2d-af2a-49d41a951a8a.jpg')",
        article2:
          "url('https://www.igsas.com.tr/uploads/news/28--06-2024/81b3fbc6-9fc3-4465-9d81-d5099262e1fc.webp')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};
