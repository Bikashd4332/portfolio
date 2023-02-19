import { defineStyleConfig } from '@chakra-ui/react';

const Heading = defineStyleConfig({
    variants: {
        primary: {
            color: 'lightteal.700',
            fontFamily: 'mono',
        },
        secondary: {
            color: 'slate.50',
            fontFamily: 'sans',
            lineHeight: '1.1',
        },
        tertiary: {
            color: 'slate.700',
            fontFamily: 'sans',
            lineHeight: '1.1',
        },
    },
    defaultProps: {
        variant: 'primary',
    },
});

export default Heading;
