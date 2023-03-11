import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    Portal,
    UseDisclosureReturn,
    Center,
    Box as ChakraBox,
} from '@chakra-ui/react';

import { NavBarLinkGroup } from './NavBarLinkGroup';

interface NavbarDrawerProps extends Pick<UseDisclosureReturn, 'isOpen' | 'onClose'> {}

function NavbarDrawer({ isOpen, onClose }: NavbarDrawerProps) {
    const router = useRouter();

    useEffect(() => {
        const closeDrawer = () => onClose();

        // on hash change close the drawer.
        router.events.on('hashChangeComplete', closeDrawer);

        return () => router.events.off('hashChangeComplete', closeDrawer);
    }, [onClose]);

    return (
        <Portal>
            <Drawer isOpen={isOpen} onClose={onClose} placement="right">
                <DrawerOverlay />
                <DrawerContent maxW="min(75vw, 400px)" backgroundColor="navyblue.300">
                    <DrawerBody as={Center}>
                        <ChakraBox padding="50px 10px" width="100%">
                            <NavBarLinkGroup isNoAnimation height="100vh" textAlign="center" />
                        </ChakraBox>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Portal>
    );
}

export { NavbarDrawer };
