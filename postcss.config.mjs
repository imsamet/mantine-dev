/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '29.6875rem',
        'mantine-breakpoint-sm': '40rem',
        'mantine-breakpoint-md': '48rem',
        'mantine-breakpoint-lg': '64rem',
        'mantine-breakpoint-xl': '80rem',
        'mantine-breakpoint-2xl': '96rem',
      },
    },
  },
};

export default config;
