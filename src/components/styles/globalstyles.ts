import { defineStyle } from '@chakra-ui/react';

const globalStyles = {
    global: () =>
        defineStyle({
            html: {
                height: 'fill-available',
                scrollBehavior: 'smooth',
            },
            body: {
                bg: 'navyblue.600',
                width: '100%',
                minHeight: 'fill-available',
                overflowX: 'hidden',
                '-webkit-font-smoothing': 'antialiased',
                fontSize: { base: 'lg', md: '17px' },
                lineHeight: '1.3',
                color: 'slate.700',
            },
            p: {
                color: 'slate.700',
                fontFamily: 'sans',
            },
            'h1, h2, h3, h4, h5, h6': {
                margin: '0px 0px 10px',
                fontWeight: '700',
                lineHeight: '1.1',
                color: 'slate.50',
                fontFamily: 'sans',
            },
            'ol,ul': {
                listStyle: 'none',
            },
            section: {
                margin: '0px auto',
                maxWidth: '1000px',
                padding: '100px 0px',
            },
            '::selection': {
                backgroundColor: 'navyblue.50',
                color: 'slate.50',
            },
            '::-webkit-scrollbar': {
                width: '12px',
            },
            '::-webkit-scrollbar-thumb': {
                bgColor: 'slate.700',
                borderWidth: '3px',
                borderStyle: 'solid',
                borderColor: 'navyblue.700',
            },

            '::-webkit-scrollbar-track': {
                bgColor: 'navyblue.700',
            },
        }),
};

export default globalStyles;
