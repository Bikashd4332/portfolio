import { HStack, Link, chakra, shouldForwardProp, List } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { Box } from '@/components/Box';
import Logo from '@/svgs/logo.svg';

const OrderedList = chakra(motion.ol, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ListItem = chakra(motion.li, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const navBarAnimation = {
    show: {
        y: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const navBarLinksAnimation = {
    initial: { y: -100, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
        },
    },
};

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
                <HStack
                    paddingX={{ base: '1.5625em', md: '3.125rem' }}
                    transitionDuration="0.25s"
                    transitionProperty="all"
                    justifyContent="space-between"
                >
                    <Box
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: 'tween', delay: '0.3' }}
                        width="80px"
                        height="80px"
                        cursor="pointer"
                    >
                        <Logo />
                    </Box>
                    <HStack gap="4" display={{ base: 'none', md: 'flex' }}>
                        <NavBarLinks />
                        <Link
                            as={motion.a}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: { delay: 0.4, type: 'tween' },
                            }}
                            variant="outlined"
                            size="md"
                            href="/resume"
                        >
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
        <List>
            <OrderedList
                display="flex"
                variants={navBarAnimation}
                initial="initial"
                animate="show"
                fontSize="xs"
                listStyleType="none"
                color="cement"
            >
                {NAVBAR_LINK_MAPPING.map((link, index) => (
                    <ListItem key={link.linksTo} margin="0" variants={navBarLinksAnimation}>
                        <Link
                            padding="2.5"
                            fontSize="sm"
                            href={link.linksTo}
                            _hover={{
                                color: 'lightteal.700',
                            }}
                        >
                            <Box as="span" color="lightteal.700">
                                {`0${index + 1}.`}
                            </Box>{' '}
                            {link.label}
                        </Link>
                    </ListItem>
                ))}
            </OrderedList>
        </List>
    );
};