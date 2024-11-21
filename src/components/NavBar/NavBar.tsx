import { useRef } from 'react';
import { HStack, Center, useDisclosure, ChakraProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { Box } from '@/components/Box';
import Logo from '@/svgs/logo.svg';
import {
  useScrollDirection,
  ScrollDirectionEnum,
} from '@/hooks/useScrollDirecton';
import { useIsScrolledToTop } from '@/hooks/useIsScrolledToTop';

import { HamburgerButton } from './HamburgerButton';
import { NavBarLinkGroup } from './NavBarLinkGroup';
import { NavbarDrawer } from './NavDrawer';

const NAVBAR_HEIGHT = 70;
const NAVBAR_HEIGHT_SNAPPED = 100;

function getStylesForScrolledToTop(
  isScrolledToTop: boolean,
  scrollDir: ScrollDirectionEnum
): ChakraProps {
  if (isScrolledToTop) {
    return {
      height: `${NAVBAR_HEIGHT_SNAPPED}px`,
    };
  }

  return {
    height: `${NAVBAR_HEIGHT}px`,
    bgColor: 'rgba(10, 25, 47, 0.85)',
    boxShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
    backdropFilter: 'blur(10px)',
    // NOTE: if scrolling down then user wants to read, hide navbar (clutter)
    // if user is scrolling up then user might want to go somewhere, show the navbar
    transform:
      scrollDir === ScrollDirectionEnum.DOWN
        ? `translateY(calc(${NAVBAR_HEIGHT}px * -1))`
        : `translateY(0)`,
  };
}

function NavBar() {
  const scrollDir = useScrollDirection({
    initialScrollDir: ScrollDirectionEnum.UP,
  });
  const isScrolledToTop = useIsScrolledToTop();
  const {
    isOpen: isDrawerOpen,
    onToggle: onDrawerToggle,
    onClose: onDrawerClose,
  } = useDisclosure();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      as="header"
      position="fixed"
      top="0"
      width="100vw"
      {...getStylesForScrolledToTop(isScrolledToTop, scrollDir)}
      zIndex={11}
      transition="all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)"
    >
      <Box as="nav" flex={1}>
        <HStack
          paddingX={{ base: '25px', md: '3.125rem' }}
          transitionDuration="0.25s"
          transitionProperty="all"
          justifyContent="space-between"
          ref={containerRef}
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
          <NavBarLinkGroup display={{ base: 'none', md: 'flex' }} />
          <HamburgerButton
            onClick={onDrawerToggle}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.4, type: 'tween' },
            }}
            variant="outlined"
            isTriggered={isDrawerOpen}
            zIndex={9}
            display={{ base: 'initial', md: 'none' }}
            // NOTE: This is required to not make it move when navdrawer opens.
            position="absolute"
            right="25px"
          />
          <NavbarDrawer
            isOpen={isDrawerOpen}
            onClose={onDrawerClose}
            /* NOTE: this is reuiqred for rendering navdrawer here
             * common to the parent of HamBurgerButton
             */
            portalProps={{
              containerRef,
              appendToParentPortal: false,
            }}
          />
        </HStack>
      </Box>
    </Box>
  );
}

export { NavBar };
