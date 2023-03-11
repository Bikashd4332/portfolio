import { Stack, StackProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { Link } from '@/components/Link';
import { NavBarLinks, NavBarLinkProps } from './NavBarLinks';

interface NavBarLinkGroupProps extends StackProps, NavBarLinkProps {}

const RESUME_BUTTON_ANIMATION = {
    initial: { y: -100, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.4, type: 'tween' },
    },
};

function NavBarLinkGroup(props: NavBarLinkGroupProps) {
    const { isNoAnimation = false, ...restProps } = props;

    const resumeButtonAnimation = isNoAnimation ? {} : RESUME_BUTTON_ANIMATION;

    return (
        <Stack
            gap="4"
            {...restProps}
            direction={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'initial', md: 'center' }}
            justifyContent={{ base: 'center', md: 'initial' }}
        >
            <NavBarLinks isNoAnimation={isNoAnimation} />
            <Link
                as={motion.a}
                initial="initial"
                animate="show"
                variants={resumeButtonAnimation}
                variant="outlined"
                size={{ base: 'lg', md: 'md' }}
                href="/resume"
            >
                Resume
            </Link>
        </Stack>
    );
}

export { NavBarLinkGroup };
