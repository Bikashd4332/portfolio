import { FeaturedProject } from '@/services/useGetFeaturedProjects';
import { Box, Link, Image } from '@chakra-ui/react';

type ProjectImageProps = Pick<FeaturedProject, 'projectImagesCollection'>;

function ProjectImage(props: ProjectImageProps) {
  const { projectImagesCollection } = props;

  const image = projectImagesCollection?.items?.[0];

  return (
    <Box
      className="project-image"
      gridArea="1 / 6 / -1 / -1"
      position="relative"
      zIndex={1}
      boxShadow="0 10px 30px -15px rgba(2,12,27,0.7)"
    >
      <Box
        as={Link}
        href={image?.url}
        rel="noopener noreferrer"
        target="_blank"
        width="100%"
        height="100%"
        background="lightteal.700"
        rounded="md"
        _hover={{
          background: 'transparent',
        }}
        verticalAlign="middle"
        display="block"
        _before={{
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 3,
          background: 'navyblue.600',
          mixBlendMode: 'screen',
        }}
      >
        <Box
          rounded="md"
          overflow="clip"
          mixBlendMode="multiply"
          filter="grayscale(100%) contrast(1) brightness(90%)"
          width="100%"
          maxWidth="100%"
        >
          <Box maxWidth="700px" display="block">
            <Image
              src="data:image/svg+xml;charset=utf-8,%3Csvg height='438' width='700' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
              maxWidth="100%"
              display="block"
              position="static"
            />
          </Box>
          <Image
            src={image?.url}
            position="absolute"
            inset={0}
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
    </Box>
  );
}

export { ProjectImage };
