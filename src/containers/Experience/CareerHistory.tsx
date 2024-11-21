import { CareerHistory } from '@/services/useExperience';
import {
  Heading,
  Box,
  VStack,
  HStack,
  Avatar,
  Text,
  Stack,
} from '@chakra-ui/react';
import { WorkLog } from './WorkLog';

export function CareerHistory(props: CareerHistory) {
  const { companyName, workLogs, companyLogo, workDuration, workedAs } = props;

  return (
    <Box>
      <HStack spacing={4} align="start">
        {companyLogo && <Avatar src={companyLogo.url} boxSize="4rem" />}
        <Box>
          <Heading as="h2" variant="secondary" fontSize="2xl">
            {companyName}
          </Heading>
          <Stack direction={{ xs: 'column', md: 'row' }}>
            <Text>{workDuration}</Text>
            <Text color="lightteal.700">({workedAs})</Text>
          </Stack>
        </Box>
      </HStack>
      <VStack spacing={4} align="start" mt={8}>
        {workLogs.items.map((workLog, index) => (
          <WorkLog key={index} {...workLog} />
        ))}
      </VStack>
    </Box>
  );
}
