import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

interface UseScrollIntoSectionProps {
    isSplashScreenPlaying: boolean;
}

function useScrollIntoSection({ isSplashScreenPlaying }: UseScrollIntoSectionProps) {
    const router = useRouter();

    // NOTE: if ther's already a hash in the url while loading, scroll into that
    useEffect(() => {
        if (isSplashScreenPlaying) return;

        const hash = router.asPath.substring(2);
        if (!hash) return;

        scrollToSection(hash);
    }, [isSplashScreenPlaying]);

    const scrollToSection = useCallback((hash: string) => {
        setTimeout(() => {
            const element = document.getElementById(hash);
            if (!element) return;
            element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
    }, []);

    // NOTE: hashChangeStart event handler for router
    const routeHashChangeStart = useCallback((pathname: string) => {
        const hash = pathname.substring(2); // with out "/#"  e.g: '/#{hash} -> hash'
        scrollToSection(hash);
    }, []);

    useEffect(() => {
        router.events.on('hashChangeStart', routeHashChangeStart);

        return () => {
            router.events.off('hashChangeStart', routeHashChangeStart);
        };
    }, [routeHashChangeStart]);
}

export { useScrollIntoSection };
