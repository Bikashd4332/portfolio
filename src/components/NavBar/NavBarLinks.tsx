import { Stack, Link, shouldForwardProp, chakra } from '@chakra-ui/react';
import { motion, isValidMotionProp, Variants } from 'framer-motion';
import { Box } from '@/components/Box';

const NAVBAR_LINK_MAPPING = [
    { linksTo: '/#about', label: 'About' },
    { linksTo: '/#experience', label: 'Experience' },
    { linksTo: '/#work', label: 'Work' },
    { linksTo: '/#contact', label: 'Contact' },
] as const;

const OrderedList = chakra(motion.ol, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ListItem = chakra(motion.li, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const navBarAnimation: Variants = {
    show: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const navBarLinksAnimation: Variants = {
    initial: { y: -100, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
        },
    },
};

export interface NavBarLinkProps {
    isNoAnimation?: boolean;
}

function NavBarLinks({ isNoAnimation = false }: NavBarLinkProps) {
    const listAnimation = isNoAnimation ? {} : navBarAnimation;
    const linksAnimation = isNoAnimation ? {} : navBarLinksAnimation;

    return (
        <OrderedList
            as={motion.ol}
            variants={listAnimation}
            initial="initial"
            animate="show"
            fontSize="xs"
            color="cement"
            width={{ base: '100%', md: 'initial' }}
        >
            <Stack direction={{ base: 'column', md: 'row' }}>
                {NAVBAR_LINK_MAPPING.map((link, index) => (
                    <ListItem key={link.linksTo} margin="0" variants={linksAnimation}>
                        <Link
                            padding={{ base: '3px 20px 20px', md: 2.5 }}
                            display={{ base: 'inline-block', md: 'initial' }}
                            fontSize={{ base: '15.56px', md: '0.8125rem' }}
                            href={link.linksTo}
                            color="slate.50"
                            _hover={{
                                color: 'lightteal.700',
                            }}
                        >
                            <Box
                                as="span"
                                display={{ base: 'block', md: 'initial' }}
                                color="lightteal.700"
                                fontSize={{ base: '14px', md: 'xs' }}
                            >
                                {`0${index + 1}.`}
                            </Box>{' '}
                            {link.label}
                        </Link>
                    </ListItem>
                ))}
            </Stack>
        </OrderedList>
    );
}

export { NavBarLinks };
