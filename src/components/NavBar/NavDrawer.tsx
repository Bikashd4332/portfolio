import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  UseDisclosureReturn,
  Center,
  PortalProps,
} from '@chakra-ui/react';

import { NavBarLinkGroup } from './NavBarLinkGroup';

interface NavbarDrawerProps
  extends Pick<UseDisclosureReturn, 'isOpen' | 'onClose'> {
  portalProps: Partial<PortalProps>;
}

function NavbarDrawer({ isOpen, onClose, portalProps }: NavbarDrawerProps) {
  const router = useRouter();

  useEffect(() => {
    const closeDrawer = () => onClose();

    // on hash change close the drawer.
    router.events.on('hashChangeComplete', closeDrawer);

    return () => router.events.off('hashChangeComplete', closeDrawer);
  }, [onClose, router.events]);

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="right"
      portalProps={portalProps}
      closeOnOverlayClick
    >
      <DrawerOverlay backdropFilter="auto" backdropBlur="sm" />
      <DrawerContent
        maxW="min(75vw, 400px)"
        backgroundColor="navyblue.300"
        height="100vh"
      >
        <DrawerBody as={Center}>
          <Center padding="50px 10px" width="100%" height="100vh">
            <NavBarLinkGroup isNoAnimation textAlign="center" />
          </Center>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export { NavbarDrawer };
