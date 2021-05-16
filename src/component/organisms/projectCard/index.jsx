import tw, { styled } from 'twin.macro';
import { useState } from 'react';

import { Card, Title, Button } from '@/atoms/index';

const ProjectCardLayout = styled.div`
  ${tw`relative mx-auto lg:max-w-3/4 text-center`}
`;

const StyledDiv = styled.div`
  ${tw`transition duration-100`}
  ${props => (props.hover ? tw`opacity-50` : `opacity-100`)}
`;

const HoverCard = ({ children, hover }) => (
  <StyledDiv hover={hover}>{children}</StyledDiv>
);

const Popup = ({ onClick }) => (
  <div className="absolute inset-x-0 top-1/2 z-10">
    <div className="flex flex-auto h-full justify-center items-center opacity-100">
      <Button title="Open" onClick={onClick} />
    </div>
  </div>
);

const ProjectCard = ({ data, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <ProjectCardLayout
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Title>{data?.name}</Title>
      <HoverCard hover={hover}>
        <Card src={data?.image} height={400} footer={false} />
      </HoverCard>
      {hover && <Popup onClick={onClick} />}
    </ProjectCardLayout>
  );
};
export default ProjectCard;
