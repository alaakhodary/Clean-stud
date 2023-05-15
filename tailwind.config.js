/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      "co-1": "#E24841",
      "co-2": "#E4CA4A",
      "co-3": "#FF7919",
      "co-4": "#10D0D5",
      "co-5": "#624BD8",
      "co-6": "#3D99F5",
      "co-7": "#79DC47",
      "co-8": "#FF5975",
      "co-9": "#FBE6E5",
      "co-10": "#FEF9E2",
      "co-11": "#FFEDE0",
      "co-12": "#E3FCFD",
      "co-13": "#E9E6F9",
      "co-14": "#E2F0FE",
      "co-15": "#ECFAE5",
      "co-16": "#FFE0E6",
      "co-17": "#303C38",
      "co-18": "#6D6E71",
    },
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    fontFamily: {
      body: "Open Sans",
    },
    boxShadow: {
      shadowPrimary: "0px 8px 24px rgba(0, 173, 238, 0.1);",
    },
  },
};
export const plugins = [];
