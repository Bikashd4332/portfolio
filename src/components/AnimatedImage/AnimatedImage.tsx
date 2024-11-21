import { Box as ChakraBox, HTMLChakraProps, Image } from '@chakra-ui/react';

import { Box } from '@/components/Box';

interface AnimatedImageProps
  extends Pick<HTMLChakraProps<'img'>, 'src' | 'alt'> {}

function AnimatedImage({
  alt: imageAlt,
  src: imageSrc,
  ...rest
}: AnimatedImageProps) {
  return (
    <ChakraBox
      width="300px"
      height="296px"
      position="relative"
      background="lightteal.700"
      rounded="md"
      margin={{ base: '50px auto 0px', md: '' }}
      _before={{
        content: `""`,
        display: 'block',
        width: '100%',
        height: '100%',
        borderRadius: 'md',
        transition: 'all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)',
        position: 'absolute',
        top: '0px',
        left: '0px',
        background: 'navyblue.700',
        mixBlendMode: 'screen',
      }}
    >
      <ChakraBox
        zIndex={1}
        position="relative"
        mixBlendMode="multiply"
        filter="grayscale(100%) contrast(1)"
        _hover={{
          '&+div': { left: '0.8rem', top: '0.8rem' },
          mixBlendMode: 'initial',
          filter: 'grayscale(0%)',
        }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width="100%"
          height="100%"
          {...rest}
        />
      </ChakraBox>
      {/* Backframe */}
      <Box
        width="100%"
        height="100%"
        position="absolute"
        borderWidth="2px"
        left="1.3rem"
        top="1.3rem"
        borderRadius="md"
        borderColor="lightteal.700"
        transition="all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)"
      />
    </ChakraBox>
  );
}

export { AnimatedImage };
