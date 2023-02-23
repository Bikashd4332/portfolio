import { HeroSection } from '@/containers/HeroSection/HeroSection';
import { Container } from '@/components/container';
import { NavBar } from '@/components/NavBar';
import { SocialSides } from '@/containers/SocialSides';

export default function Index() {
    return (
        <>
            <NavBar />
            <Container as="main">
                <HeroSection />
                <SocialSides />
            </Container>
        </>
    );
}
