import { useEffect, useState } from 'react';

function useIsScrolledToTop() {
    const [isScrolledToTop, setIsScrolledToTop] = useState(true);

    const handleScroll = () => {
        setIsScrolledToTop(window.scrollY < 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.addEventListener('scroll', handleScroll);
    }, []);

    return isScrolledToTop;
}

export { useIsScrolledToTop };
