import { useState } from 'react';
import { find, map } from 'lodash';

import { Container, Spacer } from '@/atoms/index';
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
    image: '/project/enres-image.png',
    description: [
      'Enres Co Ltd. is IOT-Platform for monitoring and management.I have join a team as frontend developer our platform structure follow MVC Pattern with clean and maintainable code',
      'Platform Availiable on Deskop app and WepApplication'
    ],
    link: 'https://enres.co',
    tools: ['NextJs', 'Antd', 'StyledComponent', 'AWS-Service', 'ElectronJs']
  },
  {
    id: '2',
    name: 'Enres.',
    image: '/project/enres-image.png',
    description: [
      'Enres Co Ltd. is IOT-Platform for monitoring and management.I have join a team as frontend developer our platform structure follow MVC Pattern with clean and maintainable code'
    ],
    tools: ['NextJs', 'Antd', 'StyledComponent', 'AWS-Service']
  }
];

const Page = ({ children }) => (
  <div className="relative h-screen overflow-scroll">{children}</div>
);

const ProjectPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setId] = useState(null);

  const handleOpen = id => {
    setShowModal(true);
    setId(id);
  };

  const handleClose = () => setShowModal(false);

  const selectedProject = find(data, d => d.id === selectedId);

  return (
    <Page>
      <StickTopBackButton />
      <CenterTopic title="PROJECT" />
      <Container>
        {map(data, d => (
          <Spacer key={d.id} pt={8} pr={8} pb={8} pl={8}>
            <ProjectCard data={d} onClick={handleOpen} />
          </Spacer>
        ))}
      </Container>
      {showModal && (
        <ProjectModal data={selectedProject} onClick={handleClose} />
      )}
    </Page>
  );
};

export default ProjectPage;
