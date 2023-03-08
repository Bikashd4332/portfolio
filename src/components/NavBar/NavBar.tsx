import { useEffect, useState } from 'react';
import { HStack, Link, chakra, shouldForwardProp, Center } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { Box } from '@/components/Box';
import Logo from '@/svgs/logo.svg';
import { useScrollDirection, ScrollDirectionEnum } from '@/hooks/useScrollDirecton';

const OrderedList = chakra(motion.ol, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ListItem = chakra(motion.li, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const navBarAnimation = {
    show: {
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

const NAVBAR_HEIGHT = 70;
const NAVBAR_HEIGHT_SNAPPED = 100;

const NAVBAR_LINK_MAPPING = [
    { linksTo: '/#about', label: 'About' },
    { linksTo: '/#experience', label: 'Experience' },
    { linksTo: '/#work', label: 'Work' },
    { linksTo: '/#contact', label: 'Contact' },
] as const;

export function NavBar() {
    const scrollDir = useScrollDirection({ initialScrollDir: ScrollDirectionEnum.UP });
    const [isScrollToTop, setIsScrollToTop] = useState(true);

    const handleScroll = () => {
        setIsScrollToTop(window.scrollY < 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <Center
            as="header"
            position="fixed"
            top="0"
            width="100vw"
            {...(isScrollToTop
                ? { height: `${NAVBAR_HEIGHT_SNAPPED}px` }
                : {
                      height: `${NAVBAR_HEIGHT}px`,
                      transform:
                          scrollDir === ScrollDirectionEnum.DOWN
                              ? `translateY(calc(${NAVBAR_HEIGHT}px * -1))`
                              : `translateY(0)`,
                      boxShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
                  })}
            backdropFilter="blur(10px)"
            zIndex={11}
            transition="all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)"
        >
            <Box as="nav" flex={1}>
                <HStack
                    paddingX={{ base: '1.5625em', md: '3.125rem' }}
                    transitionDuration="0.25s"
                    transitionProperty="all"
                    justifyContent="space-between"
                >
                    <Box
                        as={motion.a}
                        href="/"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: 'tween', delay: '0.3' }}
                        width="42px"
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
        </Center>
    );
}
const NavBarLinks = () => {
    return (
        <OrderedList
            as={motion.ol}
            variants={navBarAnimation}
            initial="initial"
            animate="show"
            fontSize="xs"
            color="cement"
        >
            <HStack>
                {NAVBAR_LINK_MAPPING.map((link, index) => (
                    <ListItem key={link.linksTo} margin="0" variants={navBarLinksAnimation}>
                        <Link
                            padding="2.5"
                            fontSize="0.8125rem"
                            href={link.linksTo}
                            color="slate.50"
                            _hover={{
                                color: 'lightteal.700',
                            }}
                        >
                            <Box as="span" color="lightteal.700" fontSize="xs">
                                {`0${index + 1}.`}
                            </Box>{' '}
                            {link.label}
                        </Link>
                    </ListItem>
                ))}
            </HStack>
        </OrderedList>
    );
};
