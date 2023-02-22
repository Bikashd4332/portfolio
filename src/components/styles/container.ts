import { defineStyleConfig } from '@chakra-ui/react';

const Container = defineStyleConfig({
    baseStyle: {
        marginX: 'auto',
        marginY: '0',
        paddingX: { base: '1.562rem', md: '100px', lg: '100px', xl: '9.375rem' },
        width: '100%',
        minHeight: '100vh',
        maxWidth: '100em',
    },
});

export default Container;
