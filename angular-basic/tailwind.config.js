/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      padding:{
        "paddingcornerLg":"7.1618vw",
        "paddingcornerSm":"1vw",
      },fontSize:{
        "text32lg":"2.122vw",
        "text32Sm":"8vw",
        "text20":"1.3263vw",
        "text16Lg":"1.061vw",
        "text18":"1.1936vw"
      },textColor:{
        "textcolor":"#C7A579",
      },backgroundColor:{
        "searchcolor":"#EDEDED",
        "botcolor":"#C7A579",
      }
    },

  },
  plugins: [],
}
