import { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { Container, Spacer } from '@/atoms/index';
import {
  StickTopBackButton,
  ProjectCard,
  CenterTopic,
  ProjectModal
} from '@/organisms/index';
import { map } from 'lodash';

const data = [
  {
    id: '1',
    name: 'Enres.',
    description:
      'Enres Co Ltd. is IOT-Platform for monitoring and management.I have join a team as frontend developer our platform structure follow MVC Pattern with clean and maintainable code',
    link: '',
    tools: ['NextJs', 'Antd', 'StyledComponent', 'AWS-Service']
  },
  {
    id: '2',
    name: 'Enres.',
    description:
      'Enres Co Ltd. is IOT-Platform for monitoring and management.I have join a team as frontend developer our platform structure follow MVC Pattern with clean and maintainable code',
    link: '',
    tools: ['NextJs', 'Antd', 'StyledComponent', 'AWS-Service']
  },
  {
    id: '3',
    name: 'Enres.',
    description:
      'Enres Co Ltd. is IOT-Platform for monitoring and management.I have join a team as frontend developer our platform structure follow MVC Pattern with clean and maintainable code',
    link: '',
    tools: ['NextJs', 'Antd', 'StyledComponent', 'AWS-Service']
  }
];

const Page = ({ children }) => (
  <div className="relative h-screen overflow-scroll">{children}</div>
);

const ProjectPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Page>
      <StickTopBackButton />
      <CenterTopic title="PROJECT" />
      <Container>
        {map(data, d => (
          <Spacer key={d.id} pt={8} pr={8} pb={8} pl={8}>
            <ProjectCard data={d} onClick={() => setShowModal(true)} />
          </Spacer>
        ))}
      </Container>
      {showModal && (
        <ProjectModal data={data[0]} onClick={() => setShowModal(false)} />
      )}
    </Page>
  );
};

export default ProjectPage;
