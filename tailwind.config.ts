import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
