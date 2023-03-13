import { VStack, Icon, Link, ListItem, UnorderedList } from '@chakra-ui/react';
import { Box } from '@/components/Box';
import { motion, Variants } from 'framer-motion';

import { Github, CodePen, Instagram, LinkedIn, Twitter } from '@/components/Icons';
import { config } from '@/config';

const EMAIL = 'bikashd4332@gmail.com';
const ICON_MAPS = {
    github: Github,
    codepen: CodePen,
    instagram: Instagram,
    twitter: Twitter,
    linkedin: LinkedIn,
} as const;

const renderSocials = (socials: typeof config['SOCIAL_ACCOUNTS']) => {
    const socialsToRender = Object.keys(socials) as (keyof typeof socials)[];

    return (
        <>
            {socialsToRender.map((social) => {
                const SvgIcon = ICON_MAPS[social];
                const url = socials[social];
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

const parentVariants: Variants = {
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
                {renderSocials(config.SOCIAL_ACCOUNTS)}
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
                    fontSize="14px"
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
