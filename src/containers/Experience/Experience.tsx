import { motion } from 'framer-motion';
import { Heading } from '@chakra-ui/react';

import { Box } from '@/components/Box';
import { Tabs } from '@/components/Tabs';

const COMPANIES = ['Classicinformatics', 'Yellow Class', 'Mindfire Solutions'];

function Experience() {
    return (
        <Box as={motion.section} id="experience">
            <Heading as="h2" variant="numbered-heading">
                Where I’ve Worked
            </Heading>
            <Tabs tabs={COMPANIES} tabPanels={COMPANIES} />
        </Box>
    );
}

export { Experience };
