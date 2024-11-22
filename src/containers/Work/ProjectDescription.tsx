import { FeaturedProject } from '@/services/useGetFeaturedProjects';
import { Box, Text } from '@chakra-ui/react';
import { ProjectTechList } from './ProjectTechList';

type ProjectDescriptionProps = Omit<
  FeaturedProject,
  'id' | 'projectImagesCollection'
>;

function ProjectDescription(props: ProjectDescriptionProps) {
  const { description, name, techStack } = props;

  return (
    <>
      <Box
        gridArea="1 / 1 / -1 / 7"
        position="relative"
        zIndex={2}
        className="project-content"
        display={{ base: 'flex', md: 'initial' }}
        flexDirection={{ base: 'column', md: 'initial' }}
        justifyContent={{ base: 'center', md: 'initial' }}
        gridColumn={{ base: '1 / -1', md: '1 / 9' }}
        padding="40px 40px 30px"
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
            {name}
          </Text>
          <Box
            boxShadow={{
              base: 'none',
              md: '0 10px 30px -15px var(--navy-shadow)',
            }}
            p={{ base: '20px 0px', md: '25px' }}
            rounded="md"
            backgroundColor={{ base: 'transparent', md: 'navyblue.300' }}
          >
            {description}
          </Box>
          <ProjectTechList {...{ techStack }} />
        </Box>
      </Box>
    </>
  );
}

export { ProjectDescription };
