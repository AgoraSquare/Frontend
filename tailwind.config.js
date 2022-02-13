module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./public/**/*.html",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      aspectRatio: {
        'dCard': '1.35/1',
      },

      screens: {
        '2lg':'1120px'
      },
      boxShadow: {
        'stamp' : '0px 45.3947px 36.3158px rgba(0, 0, 0, 0.07), 0px 29.4225px 21.2683px rgba(0, 0, 0, 0.0531481), 0px 17.4854px 11.5673px rgba(0, 0, 0, 0.0425185), 0px 9.07895px 5.90132px rgba(0, 0, 0, 0.035), 0px 3.69883px 2.95906px rgba(0, 0, 0, 0.0274815), 0px 0.840643px 1.42909px rgba(0, 0, 0, 0.0168519)',
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
