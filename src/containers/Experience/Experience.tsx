import { motion } from 'framer-motion';
import { Heading } from '@chakra-ui/react';
import { Box } from '@/components/Box';
import { Tabs } from '@/components/Tabs';
import { useExperience } from '@/services/useExperience';
import { getUniqueCompanies } from './utils';
import { CareerHistory } from './CareerHistory';

function Experience() {
    const { data } = useExperience();

    const uniqueCompanies = getUniqueCompanies(data);

    const tabPanels = uniqueCompanies.map((companyName) => {
        if (!data) {

        const careerHistoryGroup = data.careerHistoryCollection.items.filter(
            (item) => item.companyName === companyName
        );

        const combinedWorkLogs = careerHistoryGroup.map(
            (careerHistory) => careerHistory.workLogs.items
        ).flat();

        return <CareerHistory key={companyName} {...careerHistoryGroup[0]} workLogs={{ items: combinedWorkLogs }} />;
    })

    return (
        <Box as={motion.section} id="experience">
            <Heading as="h2" variant="numbered-heading">
                Where I’ve Worked
            </Heading>
            { tabPanels &&  <Tabs tabs={uniqueCompanies} tabPanels={tabPanels} /> }
        </Box>
    );
}

export { Experience };
