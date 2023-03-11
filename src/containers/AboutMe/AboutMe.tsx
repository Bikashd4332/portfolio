import { motion, Variants } from 'framer-motion';
import { Heading, Grid, Text, VStack, UnorderedList, ListItem } from '@chakra-ui/react';

import { Box } from '@/components/Box';
import { AnimatedImage } from '@/components/AnimatedImage';

const KNOWN_TECHNOLOGIES = [
    'JavaScript (ES6+)',
    'React',
    'Typescript',
    'Node.js',
    'Jest',
    'Nest.js',
    'ChakraUI',
    'ReactTable',
    'urql',
    'react-hook-form',
] as const;

const sectionAnimation: Variants = {
    initial: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: '0.4',
        },
    },
};

function AboutMe() {
    return (
        <Box
            as={motion.section}
            id="about-me"
            initial="initial"
            whileInView="show"
            variants={sectionAnimation}
            viewport={{ amount: 0.4, once: true }}
        >
            <Heading as="h2" variant="numbered-heading">
                About Me
            </Heading>
            <Grid templateColumns="3fr 2fr" gap="50px" display={{ base: 'block', md: 'grid' }}>
                <VStack gap="15px" alignItems="flex-start">
                    <Text>
                        Hello! My name is Bikash and I enjoy creating things that live on the
                        internet. My interest in web development started back in 2012 when I decided
                        to try editing custom Tumblr themes — turns out hacking together a custom
                        reblog button taught me a lot about HTML & CSS!
                    </Text>
                    <Text>
                        Fast-forward to today, and I’ve had the privilege of working at an
                        advertising agency, a start-up, a huge corporation, and a student-led design
                        studio. My main focus these days is building accessible, inclusive products
                        and digital experiences at Upstatement for a variety of clients.
                    </Text>
                    <Text>
                        I also recently launched a course that covers everything you need to build a
                        web app with the Spotify API using Node & React.
                    </Text>
                    <Text>
                        I also recently launched a course that covers everything you need to build a
                        web app with the Spotify API using Node & React.
                    </Text>

                    <Grid
                        as={UnorderedList}
                        templateColumns="repeat(2, minmax(140px, 200px))"
                        gap="10px"
                        overflow="hidden"
                        listStyleType="none"
                    >
                        {KNOWN_TECHNOLOGIES.map((technology) => (
                            <ListItem key={technology} fontFamily="mono" fontSize="13px">
                                <Box as="span" color="lightteal.700" pr="10px">
                                    ▹
                                </Box>
                                {technology}
                            </ListItem>
                        ))}
                    </Grid>
                </VStack>
                <AnimatedImage src="/bikash.avif" alt="Profile Picture" />
            </Grid>
        </Box>
    );
}

export { AboutMe };
