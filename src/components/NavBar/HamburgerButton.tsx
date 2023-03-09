import { Button, Box as ChakraBox, ButtonProps, ChakraProps } from '@chakra-ui/react';
import { motion, AnimationProps } from 'framer-motion';

interface HamburgerTriggerButtonProps
    extends Omit<AnimationProps, 'transition'>,
        Omit<ButtonProps, 'transition'> {
    isTriggered: boolean;
}

const COMMON_HAMBURGER_STYLES: ChakraProps = {
    height: '2px',
    borderRadius: '4px',
    bgColor: 'lightteal.700',
    position: 'absolute',
    right: '0',
    transformOrigin: 'center',
};

const COMMON_HAMBURGER_ANIMATION = (isTriggered: boolean, index: number): ChakraProps => ({
    ...(index === 1
        ? {
              width: isTriggered ? '100%' : '120%',
              top: isTriggered ? '0' : '-10px',
              opacity: isTriggered ? 0 : 1,
              // NOTE: defining order of animation.
              transition: isTriggered
                  ? 'top 0.1s ease-out,opacity 0.1s ease-out 0.12s'
                  : 'top 0.1s ease-in 0.25s,opacity 0.1s ease-in',
          }
        : index === 2
        ? {
              width: isTriggered ? '100%' : '80%',
              bottom: isTriggered ? '0' : '-10px',
              transform: `rotate(${isTriggered ? '-90deg' : '0'})`,
              // NOTE: defining order of animation.
              transition: isTriggered
                  ? 'bottom 0.1s ease-out,transform 0.22s cubic-bezier(0.215,0.61,0.355,1) 0.12s'
                  : 'bottom 0.1s ease-in 0.25s,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19)',
          }
        : {
              transform: `rotate(${isTriggered ? '225deg' : '0deg'})`,
              transitionDelay: isTriggered ? '0.12s' : '0s',
          }),
});

function HamburgerButton({ isTriggered, ...props }: HamburgerTriggerButtonProps) {
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
                <ChakraBox
                    top="50%"
                    width="100%"
                    transition="transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1)"
                    {...COMMON_HAMBURGER_STYLES}
                    {...COMMON_HAMBURGER_ANIMATION(isTriggered, 0)}
                >
                    <ChakraBox
                        width="120%"
                        {...COMMON_HAMBURGER_STYLES}
                        {...COMMON_HAMBURGER_ANIMATION(isTriggered, 1)}
                    />
                    <ChakraBox
                        width="80%"
                        {...COMMON_HAMBURGER_STYLES}
                        {...COMMON_HAMBURGER_ANIMATION(isTriggered, 2)}
                    />
                </ChakraBox>
            </ChakraBox>
        </Button>
    );
}

export { HamburgerButton };
