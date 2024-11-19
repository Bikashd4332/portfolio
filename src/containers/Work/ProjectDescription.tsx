import { Box, Text } from '@chakra-ui/react';
import { ProjectTechList } from './ProjectTechList';

function ProjectDescription() {
  return (
    <>
      <Box
        gridArea="1 / 1 / -1 / 7"
        position="relative"
        zIndex={2}
        className="project-content"
      >
        <Box position="relative">
          <Text
            fontFamily="mono"
            color="lightteal.700"
            fontWeight={400}
            fontSize="xs"
            my="10px"
          >
            Featured Project
          </Text>
          <Text fontSize="clamp(24px, 5vw, 28px)" mb="20px">
            Halycon Theme
          </Text>
          <Box
            boxShadow="0 10px 30px -15px var(--navy-shadow)"
            p="25px"
            rounded="md"
            backgroundColor="navyblue.300"
          >
            A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
            and more. Available on Visual Studio Marketplace, Package Control,
            Atom Package Manager, and npm.
          </Box>
          <ProjectTechList />
        </Box>
      </Box>
    </>
  );
}

export { ProjectDescription };
