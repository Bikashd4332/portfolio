import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  variants: {
    primary: {
      borderWidth: '1px',
      borderColor: 'lightteal.700',
      backgroundColor: 'transparent',
      borderRadius: 'md',
      padding: '0.75rem 1rem',
      fontFamily: "'SF Mono','Fira Code','Fira Mono','Roboto Mono',monospace'",
      fontSize: 'xs',

      _hover: {
        outline: 'none',
        boxShadow: '3px 3px 0 0 #64ffda',
        transform: 'translate(-4px, -4px)',
      },
    },
  },
});

export default Button;
