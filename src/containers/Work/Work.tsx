import { Box } from '@/components/Box';
import { Heading, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { SECTION_ANIMATION } from '../animation';
import ProjectContent from './ProjectContent';

function Work() {
  return (
    <Box
      as={motion.section}
      id="work"
      initial="initial"
      whileInView="show"
      variants={SECTION_ANIMATION}
      viewport={{ amount: 0.4, once: true }}
    >
      <Heading as="h2" variant="numbered-heading">
        Some Things I’ve Built
      </Heading>

      <VStack spacing="100px">
        <ProjectContent />
        <ProjectContent />
        <ProjectContent />
      </VStack>
    </Box>
  );
}

export { Work };
