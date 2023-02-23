import { VStack, Icon, Link, ListItem, UnorderedList } from '@chakra-ui/react';
import { Box } from '@/components/Box';
import { motion } from 'framer-motion';

import { Github, CodePen, Instagram, LinkedIn, Twitter } from '@/components/Icons';

const ACCOUNT_MAPS = {
    github: {
        iconComp: Github,
        href: 'https://github.com/bikashd4332',
    },
    codepen: {
        iconComp: CodePen,
        href: 'https://codepen.io/bikashd4332/',
    },
    instagram: {
        iconComp: Instagram,
        href: 'https://instagram.com/bikdashing',
    },
    twitter: {
        iconComp: Twitter,
        href: 'https://twitter.com/bikashd4332',
    },
    linkedin: {
        iconComp: LinkedIn,
        href: 'https://www.linkedin.com/in/bikash-das-2a689a151',
    },
} as const;

const childVariants = {
    initial: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { type: 'tween' },
    },
};

const renderSocials = (socials: typeof ACCOUNT_MAPS) => {
    const socialsToRender = Object.keys(socials) as (keyof typeof ACCOUNT_MAPS)[];

    return (
        <>
            {socialsToRender.map((social) => {
                const SvgIcon = socials[social]?.iconComp;
                const url = socials[social]?.href;
                return (
                    <ListItem
                        as={motion.li}
                        variants={childVariants}
                        key={social}
                        _last={{ marginBottom: '20px' }}
                    >
                        <Link href={url} padding="10px" target="_blank" rel="noopener noreferrer">
                            <Icon w="20px" h="20px">
                                <SvgIcon />;
                            </Icon>
                        </Link>
                    </ListItem>
                );
            })}
        </>
    );
};

const parentVariants = {
    initial: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delay: 1.8,
        },
    },
};

const SocialSides = () => {
    return (
        <Box
            variants={parentVariants}
            initial="initial"
            animate="show"
            display={{ base: 'none', lg: 'initial' }}
        >
            <VStack
                as={UnorderedList}
                spacing="4"
                listStyleType="none"
                position="absolute"
                left="30px"
                bottom="0"
            >
                {renderSocials(ACCOUNT_MAPS)}
                <Box as="span" width="1px" bg="slate.50" height="90px" display="inline-block" />
            </VStack>
        </Box>
    );
};

export { SocialSides };
