import { FeaturedProject } from '@/services/useGetFeaturedProjects';
import { ListItem, UnorderedList } from '@chakra-ui/react';

type ProjectTechListProps = Pick<FeaturedProject, 'techStack'>;

function ProjectTechList(props: ProjectTechListProps) {
  const { techStack } = props;

  return (
    <UnorderedList
      className="project-tech-list"
      display="flex"
      listStyleType="none"
      mt="25px"
      mb="10px"
      flexWrap="wrap"
      sx={{
        '& > li': {
          mb: '5px',
          mr: '20px',
        },
      }}
    >
      {techStack.map((tech) => (
        <ListItem key={tech}>{tech}</ListItem>
      ))}
    </UnorderedList>
  );
}

export { ProjectTechList };
