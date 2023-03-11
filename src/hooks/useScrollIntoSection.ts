import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

function useScrollIntoSection() {
    const router = useRouter();

    // NOTE: hashChangeStart event handler for router
    const routeHashChangeStart = useCallback((pathname: string) => {
        const hash = pathname.substring(2); // with out "/#"  e.g: '/#{hash} -> hash'
        const element = document.getElementById(hash);
        if (!element) return;
        element.scrollIntoView({ behavior: 'smooth' });
    }, []);

    useEffect(() => {
        router.events.on('hashChangeStart', routeHashChangeStart);

        return () => {
            router.events.off('hashChangeStart', routeHashChangeStart);
        };
    }, [routeHashChangeStart]);
}

export { useScrollIntoSection };
