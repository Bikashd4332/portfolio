import { Box, As } from '@chakra-ui/react';

import { ReactNode } from 'react';

type ContainerProps = {
    children: ReactNode;
    as?: As;
};

export function Container({ children, as = 'div' }: ContainerProps) {
    return (
        <Box
            as={as}
            paddingX={{ base: '1.562rem', md: 14, lg: '9.375rem' }}
            width="100%"
            minHeight="100vh"
            maxWidth="100em"
            marginTop="100px"
            margin="0 auto"
        >
            {children}
        </Box>
    );
}
