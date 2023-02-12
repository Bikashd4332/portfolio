import Head from 'next/head';

import { HeroSection } from '@/containers/HeroSection/HeroSection';
import { Container } from '@/components/container';
import { NavBar } from '@/components/NavBar';

export default function Index() {
    return (
        <>
            <Head>
                <title>Bikash Das</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width, shrink-to-fit=no"
                />
                <meta name="description" content="" />
                <meta
                    name="description"
                    content="Bikash Das is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences."
                    data-react-helmet="true"
                ></meta>
            </Head>
            <NavBar />
            <Container>
                <HeroSection />
            </Container>
        </>
    );
}
