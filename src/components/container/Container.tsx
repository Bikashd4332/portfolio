import { Box } from '@chakra-ui/react';

import { ReactNode } from 'react';

type ContainerProps = {
    children: ReactNode;
};

export function Container({ children }: ContainerProps) {
    return (
        <Box
            as="main"
            paddingX={{ base: '1.562rem', md: '9.375rem' }}
            width="100%"
            min-height="100vh"
            maxWidth="1600px"
            marginTop="100px"
            margin="0 auto"
        >
            {children}
        </Box>
    );
}
