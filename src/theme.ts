import { ChakraTheme, extendBaseTheme } from '@chakra-ui/react';

import Link from '@/styles/link';
import Heading from '@/styles/heading';
import Container from '@/styles/container';
import Tabs from '@/styles/tabs';
import globalStyles from '@/styles/globalstyles';

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

const zIndices = {
    drawer: 9,
    drawerToggler: 10,
    navbar: 11,
};

const theme = extendBaseTheme({
    radii,
    colors,
    fonts,
    breakpoints,
    fontSizes,
    zIndices,
    components: { Link, Heading, Container, Tabs },
    styles: { ...globalStyles },
} as Partial<ChakraTheme>);

export default theme;
