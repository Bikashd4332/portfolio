import { ProjectContainer } from './ProjectContainer';
import { ProjectDescription } from './ProjectDescription';
import { ProjectImage } from './ProjectImage';

function ProjectContent() {
  return (
    <ProjectContainer>
      <ProjectDescription />
      <ProjectImage />
    </ProjectContainer>
  );
}

export default ProjectContent;
