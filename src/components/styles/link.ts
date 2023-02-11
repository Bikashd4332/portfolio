import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const Link = defineStyleConfig({
    variants: {
        primary: defineStyle({
            bg: 'transparent',
            color: 'lightteal',
            borderWidth: '1px',
            borderColor: 'lightteal',
            textDecoration: 'none',
            fontSize: 'sm',
            _hover: {
                bg: 'rgba(100,255,218,0.1)',
                textDecor: 'none',
            },
            borderRadius: '4px',
        }),
    },
    sizes: {
        md: defineStyle({
            paddingX: '4',
            paddingY: '3',
        }),
        lg: defineStyle({
            paddingX: '7',
            paddingY: '5',
        }),
    },
    defaultProps: {
        variant: 'primary',
    },
});

export default Link;
