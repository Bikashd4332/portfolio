import { HeroSection } from '@/containers/HeroSection/HeroSection';
import { MetaInfo } from '@/containers/MetaInfo';
import { Container } from '@/components/container';
import { NavBar } from '@/components/NavBar';

export default function Index() {
    return (
        <>
            <MetaInfo />
            <NavBar />
            <Container>
                <HeroSection />
            </Container>
        </>
    );
}
