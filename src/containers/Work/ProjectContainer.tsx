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
          gridColumn: '7 / -1',
          textAlign: 'right',
        },

        '&:nth-of-type(2n+1) > .project-image': {
          gridColumn: '1 / 8',
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
