import {
  CodePen,
  Github,
  Instagram,
  LinkedIn,
  Twitter,
} from '@/components/Icons';
import { config } from '@/config';
import { Icon, Link, ListItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const ICON_MAPS = {
  github: Github,
  codepen: CodePen,
  instagram: Instagram,
  twitter: Twitter,
  linkedin: LinkedIn,
} as const;

export const renderSocials = (socials: (typeof config)['SOCIAL_ACCOUNTS']) => {
  const socialsToRender = Object.keys(socials) as (keyof typeof socials)[];

  return socialsToRender.map((social) => {
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
        <Link
          href={url}
          padding="10px"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon w="20px" h="20px">
            <SvgIcon />;
          </Icon>
        </Link>
      </ListItem>
    );
  });
};
