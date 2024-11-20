import { Center } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';

import { AnimatedLogo } from '@/components/AnimatedLogo';
import { Box } from '@/components/Box';
import { useSplashScreen } from '@/hooks/useSplashScreen';

import { useScrollIntoSection } from '@/hooks/useScrollIntoSection';
import { UseSplashScreenProps } from '@/hooks/useSplashScreen';
import { PropsWithChildren } from 'react';

interface SplashScreenProps extends UseSplashScreenProps {}

export function SplashScreen({
  durationInSeconds,
  children,
}: PropsWithChildren<SplashScreenProps>) {
  const isSplashScreenPlaying = useSplashScreen({ durationInSeconds });
  useScrollIntoSection({ isSplashScreenPlaying });

  return (
    <AnimatePresence>
      {isSplashScreenPlaying ? (
        <Center
          as={Box}
          key="splash-screen-wrapper"
          height="100vh"
          width="100vw"
          p="4rem"
          bg="navyblue.700"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: '0.1' }}
        >
          <Box w="200px">
            <AnimatedLogo duration={durationInSeconds} />
          </Box>
        </Center>
      ) : (
        //! it's been deliberately wrapped in div
        //! facing issues with navbar being redered twice due to some reason of the top animate presence
        <div>{children}</div>
      )}
    </AnimatePresence>
  );
}
