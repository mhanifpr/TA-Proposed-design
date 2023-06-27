/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "white": "#fff",
        "black": "#000",
        "oldlace": "#fcf4e8",
        "gainsboro": {
          "200": "#d9d9d9",
          "300": "rgba(217, 217, 217, 0.5)"
        },
        "dodgerblue": "#458fff",
        "peru": "#d5844d",
        "cornflowerblue": {
          "100": "#7a88e5",
          "200": "#3377cb"
        },
        "aliceblue": "#e8f5fc",
        "darkslategray": {
          "100": "#19445f",
          "200": "#18435e"
        },
        "mintcream": "#eff7ee",
        "dimgray": {
          "100": "#5a7156",
          "200": "#562c28"
        },
        "darkolivegreen": "#3e583a",
        "whitesmoke": "#ececec",
        "gray": {
          "100": "#fafafa",
          "200": "#532824"
        },
        "saddlebrown": {
          "100": "#624621",
          "200": "#5e411c"
        },
        "lightgray": {
          "100": "#d6d6d6",
          "200": "#d4d4d4"
        },
        "darkgray": "#afafaf",
        "lavenderblush": "#f8eeed"
      },
      "fontFamily": {
        "poppins": "Poppins",
        "inherit": "inherit",
        "roboto": "Roboto"
      },
      "borderRadius": {
        "3xs": "10px",
        "11xl": "30px",
        "8xs": "5px"
      }
    },
    "fontSize": {
      "sm": "14px",
      "xs": "12px",
      "mini": "15px",
      "xl": "20px",
      "13xl": "32px",
      "29xl": "48px",
      "base": "16px",
      "5xl": "24px",
      "smi": "13px",
      "3xl": "22px",
      "lg": "18px",
      "17xl": "36px",
      "45xl": "64px"
    }
  },
  "corePlugins": {
    "preflight": false
  }
}