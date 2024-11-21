import { Box } from '@/components/Box';
import { Link, UnorderedList, VStack } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';

import { config } from '@/config';
import { renderSocials } from './utils';

const EMAIL = 'bikashd4332@gmail.com';

const parentVariants: Variants = {
  initial: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1.8,
    },
  },
};

function SocialSides() {
  return (
    <Box
      variants={parentVariants}
      initial="initial"
      animate="show"
      display={{ base: 'none', md: 'initial' }}
    >
      <VStack
        as={UnorderedList}
        margin="0"
        spacing="4"
        listStyleType="none"
        position="fixed"
        left={{ base: '20px', lg: '40px' }}
        bottom="0"
      >
        {renderSocials(config.SOCIAL_ACCOUNTS)}
        <Box
          as="span"
          width="1px"
          bg="slate.50"
          height="90px"
          display="inline-block"
        />
      </VStack>

      <VStack position="fixed" right="40px" bottom="0" left="auto">
        <Link
          as={motion.a}
          padding="10px"
          whileHover={{
            y: -5,
            transition: { duration: 0.1, type: 'tween' },
          }}
          href={`mailto:${EMAIL}`}
          fontSize="14px"
          display="inline-block"
          lineHeight="18px"
          letterSpacing="0.1em"
          marginBottom="20px"
          _hover={{
            color: 'lightteal.700',
          }}
          sx={{ writingMode: 'vertical-rl' }}
        >
          {EMAIL}
        </Link>
        <Box
          as="span"
          width="1px"
          bg="slate.50"
          height="90px"
          display="inline-block"
          marginTop="20px"
        />
      </VStack>
    </Box>
  );
}

export { SocialSides };
