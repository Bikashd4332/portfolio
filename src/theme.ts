import { ChakraTheme, extendBaseTheme } from '@chakra-ui/react';

import Link from './components/styles/link';
import Heading from './components/styles/heading';
import Container from './components/styles/container';
import globalStyles from './components/styles/globalstyles';

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
    components: { Link, Heading, Container },
    styles: { ...globalStyles },
} as Partial<ChakraTheme>);

export default theme;
