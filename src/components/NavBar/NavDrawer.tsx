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

interface NavbarDrawerProps extends Pick<UseDisclosureReturn, 'onClose' | 'isOpen'> {}

function NavbarDrawer({ isOpen, onClose }: NavbarDrawerProps) {
    return (
        <Portal>
            <Drawer isOpen={isOpen} onClose={onClose} placement="right">
                <DrawerOverlay />
                <DrawerContent maxW="min(75vw, 400px)" backgroundColor="navyblue.300">
                    <DrawerBody as={Center}>
                        <ChakraBox padding="50px 10px">
                            <NavBarLinkGroup isNoAnimation height="100vh" textAlign="center" />
                        </ChakraBox>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Portal>
    );
}

export { NavbarDrawer };
