import tw, { styled } from 'twin.macro';
import { useState } from 'react';

import { ImageCover, LinkButton } from '@/atoms/index';

const Card = styled.div`
  ${props =>
    tw`flex flex-col w-full h-full p-8 bg-white origin-center
    hover:shadow-lg overflow-hidden`};

  transition: 0.3s;
`;

const Frame = styled.div`
  ${props => tw`relative w-full h-80 lg:h-full mb-16 transform `};
  ${props => props.active && tw`scale-125`}

  transition: 0.3s;
`;

const SelectionCard = ({ src, link, title }) => {
  const [active, setAction] = useState(false);

  return (
    <Card
      onMouseEnter={() => setAction(true)}
      onMouseLeave={() => setAction(false)}
    >
      <Frame active={active}>
        <ImageCover src={src} alt="image" />
      </Frame>
      <LinkButton link={link} title={title}>
        Click
      </LinkButton>
    </Card>
  );
};

export default SelectionCard;
