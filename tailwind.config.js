/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gainsboro: {
          "100": "#e8e8e8",
          "200": "#d9d9d9",
          "300": "rgba(217, 217, 217, 0.5)",
        },
        peru: "#d5844d",
        oldlace: "#fcf4e8",
        aliceblue: "#e8f5fc",
        darkslategray: {
          "100": "#19445f",
          "200": "#18435e",
        },
        mintcream: "#eff7ee",
        dimgray: {
          "100": "#5a7156",
          "200": "#562c28",
        },
        darkolivegreen: "#3e583a",
        saddlebrown: {
          "100": "#624621",
          "200": "#5e411c",
        },
        lavenderblush: "#f8eeed",
        gray: {
          "100": "#fafafa",
          "200": "#532824",
          "300": "rgba(0, 0, 0, 0.5)",
        },
        darkgray: "#afafaf",
        cornflowerblue: {
          "100": "#7a88e5",
          "200": "#3377cb",
        },
        lightgray: "#d6d6d6",
        silver: "#c9c3c3",
      },
      fontFamily: {
        poppins: "Poppins",
        inherit: "inherit",
        roboto: "Roboto",
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
      },
    },
    fontSize: {
      xl: "20px",
      xs: "12px",
      mini: "15px",
      sm: "14px",
      base: "16px",
      "29xl": "48px",
      smi: "13px",
      lg: "18px",
      "17xl": "36px",
      "45xl": "64px",
      "5xl": "24px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
