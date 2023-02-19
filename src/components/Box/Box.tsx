import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion, isValidMotionProp, MotionProps, VariantLabels } from 'framer-motion';

const AnimatedBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default AnimatedBox;
