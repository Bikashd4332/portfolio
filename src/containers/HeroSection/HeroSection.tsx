import { Flex, Heading, Text, Link } from '@chakra-ui/react';

export function HeroSection() {
    return (
        <Flex
            as="section"
            flexDirection="column"
            justifyContent="center"
            maxWidth="62.5rem"
            marginX={{ base: '0', md: '7rem' }}
            height="100vh"
        >
            <Heading
                size={{ base: 'xs', md: 'sm' }}
                fontWeight="medium"
                marginBottom={{ base: '0.5', md: '1rem' }}
                marginLeft={{ base: '2px', md: '4px' }}
            >
                Hi, my name is
            </Heading>
            <Heading variant="secondary" fontSize={{ base: '2.5rem', md: '5rem' }}>
                Bikash Das.
            </Heading>
            <Heading variant="tertiary" fontSize={{ base: '2.5rem', md: '5rem' }} lineHeight="1.1">
                I build things for Web.
            </Heading>
            <Text
                marginTop={{ base: '1.25rem', md: '2rem' }}
                maxWidth="580px"
                color="slate"
                fontFamily="sans"
                fontSize={{ base: '1.125rem', md: 'xl' }}
                lineHeight="1.3"
            >
                I’m a software engineer specializing in building (and occasionally designing)
                exceptional digital experiences. Currently, I’m focused on building accessible,
                human-centered products at.
            </Text>
            <Link
                variant="outlined"
                size={{ md: 'lg' }}
                marginTop="50px"
                paddingY="1.25rem"
                paddingX="1.75rem"
                width="max-content"
                fontSize={{ base: '0.875rem' }}
            >
                Let me introduce you!
            </Link>
        </Flex>
    );
}