import { Box } from '@/components/Box';
import { Tabs } from '@/components/Tabs';
import { useExperience } from '@/services/useExperience';
import { Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { SECTION_ANIMATION } from '../animation';
import { getUniqueCompanies, prepareCareerTabPanels } from './utils';

function Experience() {
  const { data } = useExperience();
  const uniqueCompanies = getUniqueCompanies(data);
  const tabPanels = prepareCareerTabPanels(data);

  return (
    <Box
      as={motion.section}
      id="experience"
      initial="initial"
      whileInView="show"
      variants={SECTION_ANIMATION}
      viewport={{ once: true, amount: 0.2 }}
      width={{ base: '95%', sm: '85%', md: '70%' }}
    >
      <Heading as="h2" variant="numbered-heading">
        Where I’ve Worked
      </Heading>
      {tabPanels.length > 0 && (
        <Tabs tabs={uniqueCompanies} tabPanels={tabPanels} />
      )}
    </Box>
  );
}

export { Experience };
