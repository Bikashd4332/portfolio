import { Box as NonAnimatedBox, Flex, Heading, Text } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';

import { Box } from '@/components/Box';
import { Link } from '@/components/Link';
import { useHeroSectionContent } from '@/services/useHeroSectionContent';

const parentVariants: Variants = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      delayChildren: 1,
      staggerChildren: 0.1,
      default: { duration: 0.2 },
    },
  },
};

const childVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
    },
  },
};

export function HeroSection() {
  const { data } = useHeroSectionContent();

  const firstHeroEntry = data?.portfolioHeroSectionCollection.items[0];

  const { heroText, introductionLine, name, summary } = firstHeroEntry || {};

  return (
    <Flex
      as={motion.section}
      direction="column"
      justifyContent="center"
      height="100vh"
      minHeight="100vh"
      variants={parentVariants}
      animate="show"
      initial="initial"
      padding={{ base: '50px', md: '0' }}
    >
      <Box variants={childVariants} width="max-content">
        <Heading
          as="h1"
          fontSize={{ base: 'xs', md: 'md' }}
          fontWeight="medium"
          marginBottom={{ base: 5, md: '1.875em' }}
          marginLeft={{ base: 0.5, md: 1 }}
        >
          {introductionLine}
        </Heading>
      </Box>
      <NonAnimatedBox fontSize="clamp(40px, 8vw, 80px)">
        <Heading
          as={motion.h1}
          variants={childVariants}
          variant="secondary"
          margin="0px"
        >
          {name}.
        </Heading>
        <Heading
          as={motion.h1}
          variants={childVariants}
          variant="tertiary"
          marginTop="5px"
          marginBottom="0"
        >
          {heroText}
        </Heading>
      </NonAnimatedBox>

      <Text
        as={motion.p}
        variants={childVariants}
        marginTop={{ base: '1.25rem', md: '1.25rem', lg: '2rem' }}
        maxWidth="580px"
      >
        {summary}
      </Text>
      <Link
        type="button"
        as={motion.a}
        href="/#about-me"
        variants={childVariants}
        variant="outlined"
        size="lg"
        width="max-content"
        display="inline-block"
        marginTop="50px"
      >
        Let me introduce you!
      </Link>
    </Flex>
  );
}
