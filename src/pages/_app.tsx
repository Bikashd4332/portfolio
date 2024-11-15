import { AppProps } from 'next/app';
import { ChakraBaseProvider } from '@chakra-ui/react';
import localFont from '@next/font/local';

import theme from '@/theme';
import { SWRProvider } from '@/providers/SWRProvider';

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

const calibreFont = localFont({
    src: [
        {
            path: '../../public/fonts/Calibre-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Calibre-Semibold.woff2',
            weight: '700',
            style: 'italic',
        },
    ],
});

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraBaseProvider theme={theme} resetCSS>
            <SWRProvider>
                <div className={`${sfMono.className} ${calibreFont.className}`}>
                    <Component {...pageProps} />
                </div>
            </SWRProvider>
        </ChakraBaseProvider>
    );
}
