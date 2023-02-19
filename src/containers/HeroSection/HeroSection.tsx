import { Flex, Heading, Text, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { Box } from '@/components/Box';

const parentVariants = {
    initial: {
        y: 25,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 1,
            duration: 0.3,
            staggerChildren: 0.4,
        },
    },
};

const childVariants = {
    initial: {
        y: 25,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
        },
    },
};

export function HeroSection() {
    return (
        <Flex
            as={motion.section}
            flexDirection="column"
            justifyContent="center"
            maxWidth="62.5rem"
            marginX={{ base: '0', md: '0', lg: 28 }}
            height="100vh"
            variants={parentVariants}
            animate="show"
            initial="initial"
        >
            <Box variants={childVariants}>
                <Heading
                    fontSize={{ base: 'xs', md: 'md' }}
                    fontWeight="medium"
                    marginBottom={{ base: 0.5, md: 4 }}
                    marginLeft={{ base: 0.5, md: 1 }}
                >
                    Hi, my name is
                </Heading>
            </Box>
            <Heading as="div" fontSize="clamp(40px, 8vw, 80px)" fontWeight="bold" lineHeight="1.1">
                <Box variants={childVariants}>
                    <Heading variant="secondary">Bikash Das.</Heading>
                </Box>
                <Box variants={childVariants}>
                    <Heading variant="tertiary">I build things for Web.</Heading>
                </Box>
            </Heading>

            <Box variants={childVariants}>
                <Text marginTop={{ base: '1.25rem', md: '2rem' }} maxWidth="580px">
                    I’m a software engineer specializing in building (and occasionally designing)
                    exceptional digital experiences. Currently, I’m focused on building accessible,
                    human-centered products at.
                </Text>
            </Box>
            <Box variants={childVariants} marginTop="50px">
                <Link variant="outlined" size={{ base: 'md', md: 'lg' }} width="max-content">
                    Let me introduce you!
                </Link>
            </Box>
        </Flex>
    );
}
