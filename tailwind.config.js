/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./templates/**/*.html", "./static/src/**/*.js"],
  theme: {
    fontFamily: {
      'body': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui',
        // other fallback fonts
      ],
      'sans': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui',
        // other fallback fonts
      ]
    }
  },
  extend: {},
  plugins: [],
};
