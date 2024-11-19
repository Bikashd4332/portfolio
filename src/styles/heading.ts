import { defineStyleConfig } from '@chakra-ui/react';

const Heading = defineStyleConfig({
  variants: {
    primary: {
      color: 'lightteal.700',
      fontFamily: 'mono',
    },
    secondary: {
      color: 'slate.50',
      fontFamily: 'sans',
      lineHeight: '1.1',
    },
    tertiary: {
      color: 'slate.700',
      fontFamily: 'sans',
      lineHeight: '1.1',
    },

    'numbered-heading': {
      display: 'flex',
      boxAlign: 'center',
      alignItems: 'center',
      position: 'relative',
      margin: '10px 0px 40px',
      width: '100%',
      fontSize: 'clamp(26px, 5vw, 32px)',
      whiteSpace: 'nowrap',

      '::before': {
        counterIncrement: 'section 1',
        content: `"0" counter(section) "."`,
        position: 'relative',
        top: '6px',
        bottom: '4px',
        fontFamily: 'mono',
        color: 'lightteal.700',
        mr: '10px',
        fontWeight: '400',
        fontSize: 'clamp(16px, 3vw, 20px)',
      },
      '::after': {
        content: `""`,
        display: 'block',
        position: 'relative',
        top: '0px',
        width: '300px',
        height: '1px',
        ml: '20px',
        bgColor: 'navyblue.50',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
});

export default Heading;
