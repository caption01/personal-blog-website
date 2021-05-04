import tw, { styled } from 'twin.macro';

import { ImageCover, LinkButton } from '@/atoms/index';

const Card = styled.div`
  ${props => tw`flex flex-col w-full h-full p-8`}
`;

const Frame = styled.div`
  ${props => tw`relative w-full h-full mb-16`}
`;

const SelectionCard = ({ src, link, title }) => {
  return (
    <Card>
      <Frame>
        <ImageCover src={src} alt="image" />
      </Frame>
      <LinkButton link={link} title={title}>
        Click
      </LinkButton>
    </Card>
  );
};

export default SelectionCard;
