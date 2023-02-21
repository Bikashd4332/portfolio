import { Flex, Heading, Text, Link, Box as NonAnimatedBox } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { Box } from '@/components/Box';

const parentVariants = {
    initial: {
        y: 50,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 1,
            delayChildren: 1,
            duration: 0.2,
            staggerChildren: 0.1,
        },
    },
};

const childVariants = {
    initial: {
        y: 50,
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
            direction="column"
            justifyContent="center"
            height="100vh"
            minHeight="100vh"
            padding="0"
            variants={parentVariants}
            animate="show"
            initial="initial"
        >
            <Box variants={childVariants} width="max-content">
                <Heading
                    as="h1"
                    fontSize={{ base: 'xs', md: 'md' }}
                    fontWeight="medium"
                    marginBottom={{ base: 5, md: '1.875em' }}
                    marginLeft={{ base: 0.5, md: 1 }}
                >
                    Hi, my name is
                </Heading>
            </Box>
            <NonAnimatedBox fontSize="clamp(40px, 8vw, 80px)">
                <Heading as={motion.h1} variants={childVariants} variant="secondary" margin="0px">
                    Bikash Das.
                </Heading>
                <Heading
                    as={motion.h1}
                    variants={childVariants}
                    variant="tertiary"
                    marginTop="5px"
                    marginBottom="0"
                >
                    I build things for Web.
                </Heading>
            </NonAnimatedBox>

            <Text
                as={motion.p}
                variants={childVariants}
                marginTop={{ base: '1.25rem', md: '1.25rem', lg: '2rem' }}
                maxWidth="580px"
            >
                I’m a software engineer specializing in building (and occasionally designing)
                exceptional digital experiences. Currently, I’m focused on building accessible,
                human-centered products at.
            </Text>
            <Link
                as={motion.a}
                variants={childVariants}
                variant="outlined"
                size="lg"
                width="max-content"
                display="inline-block"
                marginTop="50px"
            >
                Let me introduce you!
            </Link>
        </Flex>
    );
}
