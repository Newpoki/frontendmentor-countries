import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        boxShadow: {
            sm: '0px 2px 4px 0px rgba(0, 0, 0, 0.06)',
            shadow: '0px 0px 7px 2px rgba(0, 0, 0, 0.03)',
            md: '0px 2px 9px 0px rgba(0, 0, 0, 0.05)',
        },
        screens: {
            mobile: '375px',
            desktop: '1440px',
        },
        colors: {
            white: '#FFFFFF',
            black: '#111517',
            grey100: 'hsl(0, 0%, 98%)',
            grey500: '#C4C4C4',
            grey700: '#B2B2B2',
            slate500: '#2B3844',
            slate700: '#202C36',
        },
        fontWeight: {
            light: '300',
            semibold: '600',
            'extra-bold': '800',
        },
        extend: {},
    },
    plugins: [],
};
export default config;
