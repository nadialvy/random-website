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
        stats:
          "url('https://www.igsas.com.tr/assets/images/main/pattern-bg.svg')",
        article1:
          "url('https://www.igsas.com.tr/uploads/news/18--07-2024/103a9ec8-22c5-4d2d-af2a-49d41a951a8a.jpg')",
        article2:
          "url('https://www.igsas.com.tr/uploads/news/28--06-2024/81b3fbc6-9fc3-4465-9d81-d5099262e1fc.webp')",
        article3:
          "url('https://www.igsas.com.tr/uploads/tesisler/iskenderun_gorsel_6.jpg')",
        sustan: "url('https://www.igsas.com.tr/assets/images/main/sustan.jpg')",
        topragin1:
          "url('https://www.igsas.com.tr/uploads/news/27--01-2025/7908a93a-c417-4766-98a0-5048d7931c11.png')",
        topragin2:
          "url('https://www.igsas.com.tr/uploads/news/20--01-2025/49c198e0-8147-4c63-a19c-9076a0025fbd.png')",
        topragin3:
          "url('https://www.igsas.com.tr/uploads/news/25--12-2024/d90789e8-9a1a-4eb3-9d93-90db861fea85.webp')",
        apaajadeh:
          "url('https://www.igsas.com.tr/assets/images/main/stats-image.jpg')",
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
