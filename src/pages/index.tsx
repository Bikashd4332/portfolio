import { AnimatePresence } from 'framer-motion';

import { HeroSection } from '@/containers/HeroSection/HeroSection';
import { Container } from '@/components/container';
import { NavBar } from '@/components/NavBar';
import { SocialSides } from '@/containers/SocialSides';
import { SplashScreen } from '@/components/SplashScreen';
import { AboutMe } from '@/containers/AboutMe';
import { Experience } from '@/containers/Experience';
import { config } from '@/config';
import { Work } from '@/containers/Work';
import { ContactMe } from '@/containers/ContactMe';

export default function Index() {
    return (
      <AnimatePresence>
        <SplashScreen
          durationInSeconds={config.SPLASH_SCREEN_DURATION_IN_SECONDS}
        >
          <NavBar />
          <Container as="main">
            <HeroSection />
            <SocialSides />
            <AboutMe />
            <Experience />
            <Work />
            <ContactMe />
          </Container>
        </SplashScreen>
      </AnimatePresence>
    );
}
