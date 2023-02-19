import { ChakraTheme, extendBaseTheme } from '@chakra-ui/react';

import Link from './components/styles/link';
import Heading from './components/styles/heading';

const fonts = {
    mono: `"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace`,
    sans: `"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif`,
};

const breakpoints = {
    xs: '23',
    sm: '30',
};

const colors = {
    navyblue: {
        50: '#233554',
        300: '#112240',
        600: '#0A192F',
        700: '#020C1B',
    },
    lightteal: {
        700: '#64FFDA',
        200: 'rgba(100,255,218,0.1)',
    },
    slate: {
        50: '#CCD6F6',
        300: '#A8B2D1',
        700: '#8892B0',
    },
};

const radii: ChakraTheme['radii'] = {
    button: '12px',
};

const fontSizes = {
    xxl: '22px',
    heading: '32px',
};

const theme = extendBaseTheme({
    radii,
    colors,
    fonts,
    breakpoints,
    fontSizes,
    components: { Link, Heading },
    styles: {
        global: () => ({
            body: {
                bg: 'navyblue.600',
                fontSize: { base: 'lg', md: 'xl' },
                lineHeight: '1.3',
            },
            p: {
                color: 'slate.700',
                fontFamily: 'sans',
            },
        }),
    },
} as Partial<ChakraTheme>);

export default theme;
