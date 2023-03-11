import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { AnimationProps } from 'framer-motion';
import { LinkProps as NextLinkProps, default as NextLink } from 'next/link';

interface LinkProps
    extends Omit<ChakraLinkProps, 'href' | 'transition'>,
        Omit<NextLinkProps, 'as'>,
        Omit<AnimationProps, 'transition'> {
    children: React.ReactNode;
}

function Link(props: LinkProps) {
    const { children, href, target, shallow, ...rest } = props;

    return (
        <NextLink passHref as={href} href={href} target={target} shallow={shallow ?? true}>
            <ChakraLink {...rest}>{children}</ChakraLink>
        </NextLink>
    );
}

export { Link };
