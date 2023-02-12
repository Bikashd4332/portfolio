import { HStack, Box, OrderedList, ListItem, Link } from '@chakra-ui/react';
import Logo from '@/svgs/logo.svg';

const NAVBAR_LINK_MAPPING = [
    { linksTo: '/#about', label: 'About' },
    { linksTo: '/#experience', label: 'Experience' },
    { linksTo: '/#work', label: 'Work' },
    { linksTo: '/#contact', label: 'Contact' },
] as const;

export function NavBar() {
    return (
        <Box as="header" position="fixed" top="0" width="100vw" height="6.25rem">
            <Box as="nav">
                <HStack paddingX="3.125rem" paddingTop={2} justifyContent="space-between">
                    <Box width="80px" height="80px" cursor="pointer">
                        <Logo />
                    </Box>
                    <HStack gap="4">
                        <NavBarLinks />
                        <Link variant="outlined" size="md" href="/resume">
                            Resume
                        </Link>
                    </HStack>
                </HStack>
            </Box>
        </Box>
    );
}

const NavBarLinks = () => {
    return (
        <HStack as={OrderedList} styleType="none" fontSize="xs" color="cement">
            {NAVBAR_LINK_MAPPING.map((link, index) => (
                <ListItem key={link.linksTo} margin="0">
                    <Link
                        padding="2.5"
                        fontSize="sm"
                        href={link.linksTo}
                        _hover={{
                            color: 'lightteal.700',
                        }}
                    >
                        <Box as="span" color="lightteal">
                            {`0${index + 1}.`}
                        </Box>{' '}
                        {link.label}
                    </Link>
                </ListItem>
            ))}
        </HStack>
    );
};
