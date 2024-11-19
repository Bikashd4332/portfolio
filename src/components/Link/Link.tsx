import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { AnimationProps, motion } from 'framer-motion';
import { LinkProps as NextLinkProps, default as NextLink } from 'next/link';

interface LinkProps
  extends Omit<ChakraLinkProps, 'href' | 'transition'>,
    Omit<NextLinkProps, 'as'>,
    Omit<AnimationProps, 'transition'> {
  type?: 'button';
  children: React.ReactNode;
}

function Link(props: LinkProps) {
  const { children, href, target, shallow, type, ...rest } = props;
  const isButtonType = type === 'button';

  return (
    <NextLink passHref href={href} target={target} shallow={shallow ?? true}>
      <ChakraLink
        {...rest}
        {...(isButtonType && {
          _hover: {
            outline: 'none',
            boxShadow: '3px 3px 0 0 #64ffda',
            transform: 'translate(-4px, -4px)',
          },
        })}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
}

export { Link };
