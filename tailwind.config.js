/**type {import('tailwind'css).Config} */
module.exports = {
  content: [
   "./pages/**/*.{js , ts , jsx , tsx}",
   "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme:{
    extend:{},
  },
  plugins:[
    require('tailwind-scrollbar'),
  ],
};