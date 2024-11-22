import { PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';

function ProjectContainer(props: PropsWithChildren) {
  const { children } = props;

  return (
    <Box
      display="grid"
      gap="10px"
      gridTemplateColumns="repeat(12, 1fr)"
      alignItems="center"
      position="relative"
      sx={{
        '&:nth-of-type(2n+1) > .project-content': {
          gridColumn: { base: '1 / -1', md: '7 / -1' },
          textAlign: { base: 'left', md: 'right' },
          padding: '40px 40px 30px',
        },

        '&:nth-of-type(2n+1) > .project-image': {
          gridColumn: { base: '1 / -1', md: '1 / 8' },
        },

        '&:nth-of-type(2n+1)  .project-tech-list': {
          justifyContent: 'end',
        },
      }}
    >
      {children}
    </Box>
  );
}

export { ProjectContainer };
