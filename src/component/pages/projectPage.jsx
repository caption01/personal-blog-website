import { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { Container } from '@/atoms/index';
import {
  StickTopBackButton,
  ProjectCard,
  CenterTopic,
  ProjectModal
} from '@/organisms/index';

const data = [
  {
    id: '1',
    name: 'Enres.',
    description:
      'Enres Co Ltd. is IOT-Platform for monitoring and management.I have join a team as frontend developer our platform structure follow MVC Pattern with clean and maintainable code',
    link: '',
    tools: ['NextJs', 'Antd', 'StyledComponent', 'AWS-Service']
  }
];

const ProjectPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <StickTopBackButton />
      <CenterTopic title="PROJECT" />
      <Container>
        <ProjectCard onClick={() => setShowModal(true)} />
      </Container>
      {showModal && <ProjectModal data={data[0]} onClick={setShowModal} />}
    </div>
  );
};

export default ProjectPage;
