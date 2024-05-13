/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  plugins: [
    // ...
    require("flowbite/plugin"),
  ],
  theme: {
    extend: {
      colors: {
        whatsappGreen: "#25D366", // Sesuaikan dengan warna WhatsApp
      },
    },
  },
};
