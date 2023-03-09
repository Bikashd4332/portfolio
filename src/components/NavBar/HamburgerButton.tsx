import { Button, Box as ChakraBox, ButtonProps, ChakraProps } from '@chakra-ui/react';

import { Box } from '@/components/Box';
import { motion, AnimationProps } from 'framer-motion';

interface DrawerTriggerButtonProps
    extends Omit<ButtonProps, 'transition'>,
        Omit<AnimationProps, 'transition'> {
    isTriggered: boolean;
}

const COMMON_HAMBURGER_STYLES: ChakraProps = {
    height: '2px',
    borderRadius: '4px',
    bgColor: 'lightteal.700',
    position: 'absolute',
    right: '0',
};

function HamburgerButton({ isTriggered, ...props }: DrawerTriggerButtonProps) {
    return (
        <Button
            as={motion.button}
            variant="unstyled"
            aria-label="Menu"
            display="flex"
            alignItems="center"
            p="15px"
            marginLeft="0 !important"
            marginRight="-15px !important"
            {...props}
        >
            <ChakraBox position="relative" width="30px" height="24px" display="inline-block">
                <Box top="13%" width="120%" {...COMMON_HAMBURGER_STYLES} />
                <Box top="50%" width="100%" {...COMMON_HAMBURGER_STYLES} />
                <Box top="85%" width="80%" {...COMMON_HAMBURGER_STYLES} />
            </ChakraBox>
        </Button>
    );
}

export { HamburgerButton };
