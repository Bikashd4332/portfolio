import { Box } from '@/components/Box';
import { Link } from '@/components/Link';
import { motion } from 'framer-motion';

export function RepoLink() {
  return (
    <Box
      _hover={{
        color: 'lightteal.700',
      }}
      lineHeight="1"
      fontSize="12px"
      fontFamily="mono"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="15px"
    >
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
