import tw, { styled } from 'twin.macro';

import { ImageCover, LinkButton } from '@/atoms/index';

const Card = styled.div`
  ${props =>
    tw`flex flex-col w-full h-full p-8 bg-white origin-center
    hover:shadow-lg overflow-hidden`};

  transition: 0.3s;
`;

const Frame = styled.div`
  ${props => tw`relative w-full h-full mb-16 transform hover:scale-125`};

  transition: 0.3s;
`;

const SelectionCard = ({ src, link, title }) => (
  <Card>
    <Frame>
      <ImageCover src={src} alt="image" />
    </Frame>
    <LinkButton link={link} title={title}>
      Click
    </LinkButton>
  </Card>
);

export default SelectionCard;
