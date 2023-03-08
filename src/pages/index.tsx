import { AnimatePresence } from 'framer-motion';

import { CompanyInfo, HeroSection } from '@/containers/HeroSection/HeroSection';
import { Container } from '@/components/container';
import { NavBar } from '@/components/NavBar';
import { SocialSides } from '@/containers/SocialSides';
import { SplashScreen } from '@/components/SplashScreen';
import { AboutMe } from '@/containers/AboutMe';

const SPLASH_SCREEN_DURATION_IN_SECONDS = 2;

const CURRENT_COMPANY_INFO: CompanyInfo = {
    name: 'Classicinformatics',
    url: 'https://classicinformatics.com',
};

export default function Index() {
    return (
        <AnimatePresence>
            <SplashScreen durationInSeconds={SPLASH_SCREEN_DURATION_IN_SECONDS}>
                <NavBar />
                <Container as="main">
                    <HeroSection currentCompanyInfo={CURRENT_COMPANY_INFO} />
                    <SocialSides />
                    <AboutMe />
                </Container>
            </SplashScreen>
        </AnimatePresence>
    );
}
