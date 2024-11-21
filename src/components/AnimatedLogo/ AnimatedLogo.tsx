import { motion, Variants } from 'framer-motion';

type AnimatedLogoProps = {
  duration?: number;
};

const svgAnimation = (duration: number): Variants => ({
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  show: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration,
      opacity: { duration: 0.2 },
    },
  },
  exit: {
    opacity: 0,
    scale: 0.2,
  },
});

function AnimatedLogo({ duration = 2 }: AnimatedLogoProps) {
  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 100 85"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 1.5,
      }}
      variants={svgAnimation(duration)}
      animate="show"
      initial="initial"
      exit="exit"
      key="splash-screen-logo"
    >
      <g id="Layer1">
        <g transform="matrix(1.05848,0,0,1.05891,-2.96491,-3.37314)">
          <motion.path
            d="M19.358,4.549L4.065,4.549C4.065,4.549 3.985,44.54 4.037,50.919C4.089,57.297 4.219,66.186 10.972,74.298C17.724,82.411 31.112,86.2 46.213,76.446C46.213,76.446 40.253,71.294 39.325,63.766C39.325,63.766 37.13,65.387 32.537,65.957C28.649,66.439 20.806,64.311 19.924,56.019C18.766,45.119 19.358,4.549 19.358,4.549Z"
            style={{ fill: 'none', stroke: '#64FFDA', strokeWidth: '1.91px' }}
            variants={svgAnimation(duration)}
          />
        </g>
        <g transform="matrix(1.05848,0,0,1.05891,-2.96491,-3.37314)">
          <motion.path
            d="M24.883,39.774L24.756,24.666C24.756,24.666 36.878,22.788 46.443,28.23C52.302,31.564 56.348,37.646 57.463,47.508C57.784,50.349 57.694,54.754 58.494,57.718C59.789,62.518 63.838,66.063 69.402,65.731C78.319,65.198 80.381,58.762 80.582,48.943C80.815,37.575 80.974,4.549 80.974,4.549L95.472,4.549C95.472,4.549 95.883,44.749 95.771,50.16C95.659,55.571 95.748,70.377 84.473,77.217C73.197,84.057 58.405,82.673 50,73.841C41.595,65.008 42.194,56.815 41.791,50.844C41.388,44.872 38.218,39.512 24.883,39.774Z"
            style={{ fill: 'none', stroke: '#64FFDA', strokeWidth: '1.91px' }}
            variants={svgAnimation(duration)}
          />
        </g>
        <g transform="matrix(1.05848,0,0,1.05891,-2.96491,-3.37314)">
          <motion.path
            d="M54.608,28.9C54.608,28.9 59.42,33.985 61.033,42.108C61.033,42.108 67.943,38.822 74.941,39.199L75.132,24.952C75.132,24.952 66.263,20.63 54.608,28.9Z"
            style={{
              fill: 'none',
              stroke: '#64FFDA',
              strokeWidth: '1.91px',
            }}
            variants={svgAnimation(duration)}
          />
        </g>
      </g>
    </motion.svg>
  );
}

export { AnimatedLogo };
