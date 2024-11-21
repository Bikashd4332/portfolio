import { Container } from '@/components/container';
import { SWRConfig, unstable_serialize } from 'swr';
import { NavBar } from '@/components/NavBar';
import { SplashScreen } from '@/components/SplashScreen';
import { config } from '@/config';
import { AboutMe } from '@/containers/AboutMe';
import { ContactMe } from '@/containers/ContactMe';
import { Experience } from '@/containers/Experience';
import { HeroSection } from '@/containers/HeroSection/HeroSection';
import { SocialSides } from '@/containers/SocialSides';
import { Work } from '@/containers/Work';
import { fetcher } from '@/providers/SWRProvider/swr.fetcher';
import {
  query as useAboutMeQuery,
  AboutMySelfCollectionResult,
} from '@/services/useAboutMe';
import {
  query as useHeroSectionContentQuery,
  PortfolioHeroCollectionResult,
} from '@/services/useHeroSectionContent';
import { Box } from '@/components/Box';
import { Link } from '@/components/Link';
import { motion } from 'framer-motion';
import { RepoLink } from '@/containers/RepoLink/RepoLink';

type IndexProps = {
  fallback: Record<
    string,
    AboutMySelfCollectionResult | PortfolioHeroCollectionResult
  >;
};

export default function Index(props: IndexProps) {
  const { fallback } = props;

  return (
    <SWRConfig value={fallback}>
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
          <RepoLink />
        </Container>
      </SplashScreen>
    </SWRConfig>
  );
}

export async function getServerSideProps() {
  const aboutMeResult = await (fetcher({
    target: useAboutMeQuery,
    type: 'content',
  }) as Promise<AboutMySelfCollectionResult>);

  const heroSectionResult = await (fetcher({
    target: useHeroSectionContentQuery,
    type: 'content',
  }) as Promise<PortfolioHeroCollectionResult>);

  return {
    props: {
      fallback: {
        [unstable_serialize({ target: useAboutMeQuery, type: 'content' })]:
          aboutMeResult,
        [unstable_serialize({
          target: useHeroSectionContentQuery,
          type: 'content',
        })]: heroSectionResult,
      },
    },
  };
}
