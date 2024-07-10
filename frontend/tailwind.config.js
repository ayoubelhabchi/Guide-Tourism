import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6499E9",
        secondaire: "#181E4B",
        gray:"#7D7D7D",
        blue:"#EEF9FF"
      
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], 
        popp: ["Poppins", "sans-serif"], 
        volk: ["Volkhov", "serif"], 
        year: ["Yesteryear", "cursive"]
      
      },
      fontWeight: {
        inter: {
          
          100: "thin",
          200: "extra-light",
          300: "light",
          400: "normal",
          500: "medium",
          600: "hd",
          700: "bold",
          800: "extra-bold",
          900: "black",
        },
        popp: {
         
          200: "extralight",
          400: "normal",
          500: "medium",
        },
        volk: {
         
          400: "normal",
          700: "bold",
         
        },
        size:{
          400:"normal",
        },
        secondaire:"#181E4B",
        buttons: "#6499E9", 
        blue_fance:"#181E4B"

      },
    },
    borderRaduis:
    {
      extralarge:'12rem'
    }
  },
  plugins: [flowbite.plugin()],
};
