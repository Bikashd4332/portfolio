import { Flex, Heading, Text, Link } from '@chakra-ui/react';

export function HeroSection() {
    return (
        <Flex
            as="section"
            flexDirection="column"
            justifyContent="center"
            maxWidth="62.5rem"
            marginX="7rem"
            height="100vh"
        >
            <Heading size="xs" fontWeight="medium" marginBottom="1rem" marginLeft="4px">
                Hi, my name is
            </Heading>
            <Heading variant="secondary" fontSize="5rem">
                Bikash Das.
            </Heading>
            <Heading variant="tertiary" fontSize="5rem" lineHeight="1.1">
                I build things for Web.
            </Heading>
            <Text
                marginTop="2rem"
                maxWidth="580px"
                color="slate"
                fontFamily="sans"
                fontSize="xl"
                lineHeight="1.3"
            >
                I’m a software engineer specializing in building (and occasionally designing)
                exceptional digital experiences. Currently, I’m focused on building accessible,
                human-centered products at.
            </Text>
            <Link variant="outlined" size="lg" marginTop="50px" width="max-content">
                Let me introduce you!
            </Link>
        </Flex>
    );
}
