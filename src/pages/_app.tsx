import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import localFont from '@next/font/local';

import theme from '@/theme';

const sfMono = localFont({
    src: [
        {
            path: '../../public/fonts/SFMonoLight.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/SFMonoLightItalic.woff',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../public/fonts/SFMonoBold.woff',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/SFMonoBoldItalic.woff',
            weight: '700',
            style: 'italic',
        },
    ],
});

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme} resetCSS>
            <main className={sfMono.className}>
                <Component {...pageProps} />
            </main>
        </ChakraProvider>
    );
}
