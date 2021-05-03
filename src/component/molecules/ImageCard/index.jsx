import tw, { styled } from 'twin.macro';

import { ImageCover, Title } from '@/atoms/index';

const Card = styled.div`
  ${props => tw`w-full h-full text-center`}
`;

const Frame = styled.div`
  ${props => tw`relative object-cover w-80 h-80 mb-4`}
`;

const ImageCard = ({ src, alt, title, onClick }) => (
  <Card>
    <Frame>
      <ImageCover src={src} alt={alt} />
    </Frame>
    {title && <Title>{title}</Title>}
  </Card>
);

export default ImageCard;
