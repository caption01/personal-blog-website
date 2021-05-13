import styled from 'styled-components';
import tw from 'twin.macro';

import { Container } from '@/atoms/index';
import {
  StickTopBackButton,
  ProjectCard,
  CenterTopic
} from '@/organisms/index';

const ProjectPage = () => (
  <div>
    <StickTopBackButton />
    <CenterTopic title="PROJECT" />
    <Container>
      <ProjectCard />
    </Container>
  </div>
);

export default ProjectPage;
