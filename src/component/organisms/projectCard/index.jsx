import tw, { styled } from 'twin.macro';
import { Card } from '@/atoms/index';

const ProjectCardLayout = styled.div`
  ${tw`mx-auto lg:max-w-3/4`}
`;

const ProjectCard = () => (
  <ProjectCardLayout>
    <Card src="/graphql-icon.png" height={300} />;
  </ProjectCardLayout>
);

export default ProjectCard;
