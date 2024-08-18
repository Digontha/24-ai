/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
        instrumentSans: "Instrument Sans, sans-serif",
        tiroBangla: "Tiro Bangla , sans-serif",
        hindSiliguri: "Hind Siliguri , sans-serif"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

