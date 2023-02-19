import { defineStyleConfig } from '@chakra-ui/react';

const Link = defineStyleConfig({
    baseStyle: {
        fontFamily: 'mono',
        textDecoration: 'none',
        transitionProperty: 'all',
        transitionDuration: '0.25s',
        cursor: 'pointer',
        color: 'cement',
        _hover: {
            textDecoration: 'none',
        },
    },
    variants: {
        outlined: {
            bg: 'transparent',
            borderWidth: '1px',
            borderColor: 'lightteal.700',
            borderRadius: '3',
            color: 'lightteal.700',
            fontFamily: 'mono',
            margin: 'none',
            lineHeight: 1,
            _hover: {
                bg: 'lightteal.200',
            },
        },
    },
    sizes: {
        md: {
            paddingX: '1rem',
            paddingY: '0.75rem',
            fontSize: '0.8125rem',
        },
        lg: {
            paddingX: '7',
            paddingY: '5',
            fontSize: { base: '0.875rem', md: 'sm' },
        },
    },
});

export default Link;
