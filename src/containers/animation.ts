import { Variants } from "framer-motion";

export const SECTION_ANIMATION: Variants = {
    initial: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: '0.4',
        },
    },
};