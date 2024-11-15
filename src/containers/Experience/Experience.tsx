import { Box } from '@/components/Box';
import { Tabs } from '@/components/Tabs';
import { useExperience } from '@/services/useExperience';
import { Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { getUniqueCompanies, prepareCareerTabPanels } from './utils';

function Experience() {
    const { data } = useExperience();
    const uniqueCompanies = getUniqueCompanies(data);
    const tabPanels = prepareCareerTabPanels(data);

    return (
        <Box as={motion.section} id="experience">
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
