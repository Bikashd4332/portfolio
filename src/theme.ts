import { ChakraTheme, extendTheme } from '@chakra-ui/react';

import Link from './components/styles/link';

const fonts = { mono: `'SF Mono', monospace` };

const breakpoints = {
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
};

const colors: ChakraTheme['colors'] = {
    navyblue: '#0a192f',
    lightteal: '#64ffda',
};

const radii: ChakraTheme['radii'] = {
    button: '12px',
};

const theme = extendTheme({
    radii,
    colors,
    fonts,
    breakpoints,
    components: { Link },
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
