import { Box } from '@/components/Box';
import { Link } from '@/components/Link';
import { config } from '@/config';
import { HStack, UnorderedList, Show } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { renderSocials } from '../SocialSides/utils';

export function RepoLink() {
  return (
    <Box
      _hover={{
        color: 'lightteal.700',
      }}
      fontSize="12px"
      fontFamily="mono"
      flexDirection="column"
      gap="24px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="15px"
      textAlign="center"
    >
      <Show below="md">
        <HStack
          as={UnorderedList}
          spacing="4"
          listStyleType="none"
          alignItems="baseline"
        >
          {renderSocials(config.SOCIAL_ACCOUNTS)}
        </HStack>
      </Show>

      <Link
        display="inline-block"
        as={motion.a}
        href="https://github.com/bikashd4332/portfolio"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Box>Designed by Brittany Chiang and Built by Bikash Das</Box>
      </Link>
    </Box>
  );
}
