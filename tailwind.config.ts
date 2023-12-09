import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        p: '18px',
        h1: '58px',
        big: '52px',
        h2: '40px',
        h3: '28px',
        h4: '23px',
      },
      colors: {
        white: '#FFFFFF',
        ghost_white: '#FBFBFF',
        orange: '#FF7D2B',
        almost_black: '#0F082D',
        black: '#070216',
      },
    },
  },
  plugins: [],
};
export default config;
