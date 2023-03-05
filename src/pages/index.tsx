import { Center } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { HeroSection } from '@/containers/HeroSection/HeroSection';
import { Container } from '@/components/container';
import { NavBar } from '@/components/NavBar';
import { SocialSides } from '@/containers/SocialSides';
import { AnimatedLogo } from '@/components/AnimatedLogo/ AnimatedLogo';
import { AnimatePresence } from 'framer-motion';
import { Box } from '@/components/Box'

const SPLASH_SCREEN_DURATION_IN_SECONDS =  2;

export default function Index() {
    const [isSplashScreenPlaying, setIsSplashScreenPlaying]  = useState(true);

    const finnishLoading = () => {
        setIsSplashScreenPlaying(false);
    };

    useEffect( () => {
        setTimeout(() => {
            finnishLoading();
        }, SPLASH_SCREEN_DURATION_IN_SECONDS * 1000 + 100)
    }, [isSplashScreenPlaying])


    return (
        <>
            <AnimatePresence>
            {isSplashScreenPlaying ? (
                <Center height="100vh" width="100vw" p="4rem" key="splash-screen-container">
                    <Box w="200px">
                        <AnimatedLogo duration={SPLASH_SCREEN_DURATION_IN_SECONDS} />
                    </Box>
                </Center>
            ): (
                <>
                <NavBar />
                <Container as="main">
                    <HeroSection />
                    <SocialSides />
                </Container>
                </>
            )}
            </AnimatePresence>
        </>
    );
}
