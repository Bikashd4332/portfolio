import { Box } from '@/components/Box';
import { useGetFeaturedProjects } from '@/services/useGetFeaturedProjects';
import { Heading, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { SECTION_ANIMATION } from '../animation';
import ProjectContent from './ProjectContent';

function Work() {
  const { data } = useGetFeaturedProjects();

  return (
    <Box
      as={motion.section}
      id="work"
      initial="initial"
      whileInView="show"
      variants={SECTION_ANIMATION}
      viewport={{ amount: 0.2, once: true }}
      padding={{ base: '50px', md: '0' }}
    >
      <Heading as="h2" variant="numbered-heading">
        Some Things I’ve Built
      </Heading>

      <VStack spacing="100px">
        {data?.featuredProjectCollection?.items
          ?.reverse?.()
          ?.map?.((project) => (
            <ProjectContent key={project.id} {...project} />
          ))}
      </VStack>
    </Box>
  );
}

export { Work };
