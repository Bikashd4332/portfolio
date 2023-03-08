import { useState, useEffect } from 'react';

export interface UseSplashScreenProps {
    durationInSeconds: number;
}

const useSplashScreen = ({ durationInSeconds }: UseSplashScreenProps) => {
    const [isSplashScreenPlaying, setIsSplashScreenPlaying] = useState(true);

    const finnishLoading = () => {
        setIsSplashScreenPlaying(false);
    };

    useEffect(() => {
        setTimeout(() => {
            finnishLoading();
        }, durationInSeconds * 1000);
    }, [isSplashScreenPlaying]);

    return isSplashScreenPlaying;
};

export { useSplashScreen };
