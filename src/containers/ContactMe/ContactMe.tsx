import { Box } from '@/components/Box';
import { Link } from '@/components/Link';
import { Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { SECTION_ANIMATION } from '../animation';

function ContactMe() {
  return (
    <Box
      as={motion.section}
      display="flex"
      flexDirection="column"
      id="contact"
      initial="initial"
      whileInView="show"
      variants={SECTION_ANIMATION}
      viewport={{ once: true, amount: 0.2 }}
      maxWidth="600px"
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        as="h2"
        mb="20px"
        fontFamily="mono"
        fontSize="md"
        fontWeight="400"
        _before={{
          counterIncrement: 'section 1',
          content: `"0" counter(section) "."`,
          mr: '10px',
          fontSize: 'sm',
        }}
      >
        What's Next?
      </Heading>

      <Heading
        variant="secondary"
        display="block"
        mb="20px"
        fontSize="clamp(40px, 5vw, 50px)"
      >
        Get in touch
      </Heading>

      <Text align="center" mb="20px">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </Text>

      <Link
        type="button"
        display="block"
        as={motion.a}
        variant="outlined"
        size="lg"
        my="20px"
        href="mailto:bikashd4332@gmail.com"
        rel="noopener noreferrer"
      >
        Say Hello
      </Link>
    </Box>
  );
}

export { ContactMe };
