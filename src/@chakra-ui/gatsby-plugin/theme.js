import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px'
});

// Refactoring UI: Palette 20
const colors = {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    red: { 500: '#BA2525' },
    blackAlpha: {
        50: 'rgba(0, 0, 0, 0.04)',
        100: 'rgba(0, 0, 0, 0.06)',
        200: 'rgba(0, 0, 0, 0.08)',
        300: 'rgba(0, 0, 0, 0.16)',
        400: 'rgba(0, 0, 0, 0.24)',
        500: 'rgba(0, 0, 0, 0.36)',
        600: 'rgba(0, 0, 0, 0.48)',
        700: 'rgba(0, 0, 0, 0.64)',
        800: 'rgba(0, 0, 0, 0.80)',
        900: 'rgba(0, 0, 0, 0.92)'
    },
    // Cool Gray
    gray: {
        50: '#F5F7FA',
        100: '#E4E7EB',
        200: '#CBD2D9',
        300: '#9AA5B1',
        400: '#7B8794',
        500: '#616E7C',
        600: '#52606D',
        700: '#3E4C59',
        800: '#323F4B',
        900: '#1F2933'
    },
    // Green
    primary: {
        50: '#E3F9E5',
        100: '#C1EAC5',
        200: '#A3D9A5',
        300: '#7BC47F',
        400: '#57AE5B',
        500: '#3F9142',
        600: '#2F8132',
        700: '#207227',
        800: '#0E5814',
        900: '#05400A'
    },

    // Light Blue
    secondary: {
        50: '#EBF8FF',
        100: '#D1EEFC',
        200: '#A7D8F0',
        300: '#7CC1E4',
        400: '#55AAD4',
        500: '#3994C1',
        600: '#2D83AE',
        700: '#1D6F98',
        800: '#166086',
        900: '#0B4F71'
    },
    accent: {
        // Purple
        1: {
            50: '#EAE2F8',
            100: '#CFBCF2',
            200: '#A081D9',
            300: '#8662C7',
            400: '#724BB7',
            500: '#653CAD',
            600: '#51279B',
            700: '#421987',
            800: '#34126F',
            900: '#240754'
        },
        // Red
        2: {
            50: '#FFEEEE',
            100: '#FACDCD',
            200: '#F29B9B',
            300: '#E66A6A',
            400: '#D64545',
            500: '#BA2525',
            600: '#A61B1B',
            700: '#911111',
            800: '#780A0A',
            900: '#610404'
        },
        // Yellow
        3: {
            50: '#FFFAEB',
            100: '#FCEFC7',
            200: '#F8E3A3',
            300: '#F9DA8B',
            400: '#F7D070',
            500: '#E9B949',
            600: '#C99A2E',
            700: '#A27C1A',
            800: '#7C5E10',
            900: '#513C06'
        }
    }
};

const theme = { ...extendTheme({ breakpoints }), colors };

export default theme;
