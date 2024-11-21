import { useEffect, useState } from 'react';

enum ScrollDirectionEnum {
  UP = 'UP',
  DOWN = 'DOWN',
}

interface UseScrollDirectionProps {
  thresholdInPixels?: number;
  initialScrollDir: ScrollDirectionEnum;
}

function useScrollDirection({
  thresholdInPixels = 0,
  initialScrollDir,
}: UseScrollDirectionProps): ScrollDirectionEnum {
  const [scrollDir, setScrollDir] =
    useState<ScrollDirectionEnum>(initialScrollDir);

  useEffect(() => {
    const threshold = thresholdInPixels ?? 0;
    // NOTE: this is the scollY when the handler intially attached as event handler
    let lastScrolly = window.scrollY;

    const updateScrollDir = () => {
      // NOTE: the current page scroll offset
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrolly) < threshold) return;

      // Else update the scroll direction since we've exhausted threshold
      setScrollDir(
        scrollY < lastScrolly
          ? ScrollDirectionEnum.UP
          : ScrollDirectionEnum.DOWN
      );
      lastScrolly = scrollY > 0 ? scrollY : 0;
    };

    const onScroll = () => {
      window.requestAnimationFrame(updateScrollDir);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [initialScrollDir, thresholdInPixels]);

  return scrollDir;
}

export { useScrollDirection, ScrollDirectionEnum };
