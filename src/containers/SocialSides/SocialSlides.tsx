import { VStack, Icon, Link, ListItem, UnorderedList } from '@chakra-ui/react';
import { Box } from '@/components/Box';
import { motion } from 'framer-motion';

import { Github, CodePen, Instagram, LinkedIn, Twitter } from '@/components/Icons';

const EMAIL = 'bikashd4332@gmail.com';
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
                        key={social}
                        _last={{ marginBottom: '20px' }}
                        _hover={{
                            color: 'lightteal.700',
                        }}
                        whileHover={{
                            y: -1,
                            transition: { duration: 0.1, type: 'tween' },
                        }}
                    >
                        <Link href={url} padding="10px" target="_blank" rel="noopener noreferrer">
                            <Icon w="20px" preserveAspectRatio="1">
                                <SvgIcon />;
                            </Icon>
                        </Link>
                    </ListItem>
                );
            })}
        </>
    );
};

const mailToLinkVariants = {
    show: {
        scale: 1.1,
        textShadow: '0px 0px 4px gray',
    },
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
            display={{ base: 'none', md: 'initial' }}
        >
            <VStack
                as={UnorderedList}
                margin="0"
                spacing="4"
                listStyleType="none"
                position="fixed"
                left={{ base: '20px', lg: '40px' }}
                bottom="0"
            >
                {renderSocials(ACCOUNT_MAPS)}
                <Box as="span" width="1px" bg="slate.50" height="90px" display="inline-block" />
            </VStack>

            <VStack position="fixed" right="40px" bottom="0" left="auto">
                <Link
                    as={motion.a}
                    padding="10px"
                    whileHover={{
                        y: -5,
                        transition: { duration: 0.1, type: 'tween' },
                    }}
                    href={`mailto:${EMAIL}`}
                    fontSize="12px"
                    display="inline-block"
                    lineHeight="18px"
                    letterSpacing="0.1em"
                    marginBottom="20px"
                    _hover={{
                        color: 'lightteal.700',
                    }}
                    sx={{ writingMode: 'vertical-rl' }}
                >
                    {EMAIL}
                </Link>
                <Box
                    as="span"
                    width="1px"
                    bg="slate.50"
                    height="90px"
                    display="inline-block"
                    marginTop="20px"
                />
            </VStack>
        </Box>
    );
};

export { SocialSides };
