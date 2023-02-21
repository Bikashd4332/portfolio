import { Box, BoxProps, useStyleConfig } from '@chakra-ui/react';

interface ContainerProps extends BoxProps {}

export function Container({ children, as, ...props }: ContainerProps) {
    const styles = useStyleConfig('Container', props);

    return (
        <Box __css={styles} as={as}>
            {children}
        </Box>
    );
}
