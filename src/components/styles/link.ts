import { defineStyleConfig } from '@chakra-ui/react';

const Link = defineStyleConfig({
    baseStyle: {
        fontFamily: 'mono',
        textDecoration: 'none',
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
            borderRadius: 'md',
            color: 'lightteal.700',
            fontFamily: 'mono',
            margin: 'none',
            _hover: {
                bg: 'lightteal.200',
            },
        },
    },
    sizes: {
        md: {
            paddingX: '5',
            paddingY: '2',
            fontSize: 'sm',
        },
        lg: {
            paddingX: '7',
            paddingY: '5',
        },
    },
});

export default Link;
