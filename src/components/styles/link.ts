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
        inline: {
            display: 'inline-block',
            position: 'relative',
            color: 'lightteal.700',
            fontFamily: 'sans',

            ':after': {
                content: `""`,
                display: 'block',
                position: 'relative',
                width: '0px',
                height: '1px',
                bottom: '-0.1px',
                backgroundColor: 'lightteal.700',
                opacity: 0.5,
                transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
            },

            _hover: {
                ':after': {
                    width: '100%',
                },
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
