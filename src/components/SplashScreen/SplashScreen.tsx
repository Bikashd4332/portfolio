import * as React from 'react';
import { Center } from '@chakra-ui/react';

import { Box } from '@/components/Box';
import { AnimatedLogo } from '@/components/AnimatedLogo';
import { useSplashScreen } from '@/hooks/useSplashScreen';

import { UseSplashScreenProps } from '@/hooks/useSplashScreen';
import { useScrollIntoSection } from '@/hooks/useScrollIntoSection';

interface SplashScreenProps extends UseSplashScreenProps {
    children: JSX.Element | JSX.Element[];
}

export function SplashScreen({ durationInSeconds, children }: SplashScreenProps) {
    const isSplashScreenPlaying = useSplashScreen({ durationInSeconds });
    useScrollIntoSection();

    if (!isSplashScreenPlaying) return <React.Fragment>{children}</React.Fragment>;

    return (
        <Center
            as={Box}
            key="splash-screen-wrapper"
            height="100vh"
            width="100vw"
            p="4rem"
            bg="navyblue.700"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: '0.1' }}
        >
            <Box w="200px">
                <AnimatedLogo duration={durationInSeconds} />
            </Box>
        </Center>
    );
}
