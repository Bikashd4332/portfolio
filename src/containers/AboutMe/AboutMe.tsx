import { motion, Variants } from 'framer-motion';
import {
  Heading,
  Grid,
  Text,
  VStack,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

import { Box } from '@/components/Box';
import { AnimatedImage } from '@/components/AnimatedImage';
import { useAboutMe } from '@/services/useAboutMe';
import { SECTION_ANIMATION } from '../animation';

function AboutMe() {
  const { data } = useAboutMe();

  const aboutMySelf = data?.aboutMyselfCollection?.items[0];

  const { aboutMe, techSkill, profileImage } = aboutMySelf ?? {};

  return (
    <Box
      as={motion.section}
      id="about-me"
      initial="initial"
      whileInView="show"
      variants={SECTION_ANIMATION}
      viewport={{ amount: 0.4, once: true }}
      padding={{ base: '50px' }}
    >
      <Heading as="h2" variant="numbered-heading">
        About Me
      </Heading>
      <Grid
        templateColumns="3fr 2fr"
        gap="50px"
        display={{ base: 'block', md: 'grid' }}
      >
        <VStack gap="15px" alignItems="flex-start">
          {aboutMe?.split('\n\n').map((paragraph, index) => (
            <Text key={index}>{paragraph}</Text>
          ))}
          <Grid
            as={UnorderedList}
            templateColumns="repeat(2, minmax(140px, 200px))"
            gap="10px"
            overflow="hidden"
            listStyleType="none"
          >
            {(techSkill?.technologies || []).map((technology) => (
              <ListItem key={technology} fontFamily="mono" fontSize="13px">
                <Box as="span" color="lightteal.700" pr="10px">
                  ▹
                </Box>
                {technology}
              </ListItem>
            ))}
          </Grid>
        </VStack>
        <AnimatedImage src={profileImage?.url} alt="Profile Picture" />
      </Grid>
    </Box>
  );
}

export { AboutMe };
