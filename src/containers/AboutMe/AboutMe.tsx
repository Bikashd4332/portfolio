import {
    Heading,
    Grid,
    Text,
    Image,
    VStack,
    Box as ChakraBox,
    UnorderedList,
    ListItem,
} from '@chakra-ui/react';

import { Box } from '@/components/Box';
import { motion } from 'framer-motion';

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

const sectionAnimation = {
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
                <ChakraBox
                    width="300px"
                    height="300px"
                    position="relative"
                    background="lightteal.700"
                    margin={{ base: '50px auto 0px', md: '' }}
                    sx={{
                        '&::before': {
                            content: `""`,
                            display: 'block',
                            width: '100%',
                            height: '100%',
                            borderRadius: 'md',
                            transition: 'all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)',
                            position: 'absolute',
                            top: '0px',
                            left: '0px',
                            background: 'navyblue.700',
                            mixBlendMode: 'screen',
                        },
                    }}
                >
                    <ChakraBox
                        zIndex={1}
                        position="relative"
                        mixBlendMode="multiply"
                        filter="grayscale(100%) contrast(1)"
                        _hover={{
                            '&+div': { left: '0.8rem', top: '0.8rem' },
                            mixBlendMode: 'initial',
                            filter: 'grayscale(0%)',
                        }}
                    >
                        <Image
                            src="/bikash.avif"
                            alt="Profile Picture"
                            width="100%"
                            height="100%"
                            borderRadius="md"
                        />
                    </ChakraBox>
                    {/* Backframe */}
                    <Box
                        width="100%"
                        height="100%"
                        position="absolute"
                        borderWidth="2px"
                        left="1.3rem"
                        top="1.3rem"
                        borderRadius="md"
                        borderColor="lightteal.700"
                        transition="all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)"
                    />
                </ChakraBox>
            </Grid>
        </Box>
    );
}

export { AboutMe };
