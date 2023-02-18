import { ChakraTheme, extendTheme } from '@chakra-ui/react';

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

const colors: ChakraTheme['colors'] = {
    navyblue: '#0a192f',
    lightteal: {
        700: '#64ffda',
        200: 'rgba(100,255,218,0.1)',
    },
    cement: '#ccd6f6',
    slate: '#8892b0',
};

const radii: ChakraTheme['radii'] = {
    button: '12px',
};

const theme = extendTheme({
    radii,
    colors,
    fonts,
    breakpoints,
    components: { Link, Heading },
    styles: {
        global: () => ({
            body: {
                bg: 'navyblue',
            },
            p: {
                color: 'lightteal',
            },
            h: {
                color: 'lightteal',
            },
        }),
    },
} as Partial<ChakraTheme>);

export default theme;
