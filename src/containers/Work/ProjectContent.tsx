import { FeaturedProject } from '@/services/useGetFeaturedProjects';
import { ProjectContainer } from './ProjectContainer';
import { ProjectDescription } from './ProjectDescription';
import { ProjectImage } from './ProjectImage';

type ProjectContentProps = FeaturedProject;

function ProjectContent(props: ProjectContentProps) {
  const { projectImagesCollection, ...rest } = props;

  return (
    <ProjectContainer>
      <ProjectDescription {...rest} />
      <ProjectImage {...{ projectImagesCollection }} />
    </ProjectContainer>
  );
}

export default ProjectContent;
