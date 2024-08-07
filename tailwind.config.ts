import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      // Primary
      primary: '#3E97FF',
      'primary-active': '#2884EF',
      'primary-light': '#ECF8FF',
      // Success
      success: '#50CD89',
      'success-active': '#47BE7D',
      'success-light': '#E8FFF3',
      // Danger
      danger: '#F1416C',
      'danger-active': '#D9214E',
      'danger-light': '#FFF5F8',
      // Info
      info: '#7239EA',
      'info-active': '#5014D0',
      'info-light': '#F8F5FF',
      // Warning
      warning: '#FFC700',
      'warning-active': '#F1BC00',
      'warning-light': '#FFF8DD',

      white: '#FFFFFF',
      'white-active': '#F5F8FA',
      dark: '#181C32',
      black: '#000',

      'gray-100': '#F9F9F9',
      'gray-200': '#F1F1F2',
      'gray-300': '#E1E3EA',
      'gray-400': '#D8D8E5',
      'gray-500': '#A1A5B7',
      'gray-600': '#7E8299',
      'gray-700': '#5E6278',
      'gray-800': '#3F4254',
      'gray-900': '#181C32',

      'soft-grey': '#F7F8FA',
      paragraph: '#7E8299',
    },
  },
  plugins: [],
};
export default config;
