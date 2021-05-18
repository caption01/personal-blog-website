import { useState } from 'react';
import { find, map } from 'lodash';

import { Container, Spacer } from '@/atoms/index';
import {
  StickTopBackButton,
  ProjectCard,
  CenterTopic,
  ProjectModal
} from '@/organisms/index';
import { projects } from '@/mocks/index';

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

  const selectedProject = find(projects, d => d.id === selectedId);

  return (
    <Page>
      <StickTopBackButton />
      <CenterTopic title="PROJECT" />
      <Container>
        {map(projects, d => (
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
