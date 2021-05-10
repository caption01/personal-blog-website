import tw, { styled } from 'twin.macro';

import { ImageCover, Title } from '@/atoms/index';

const Card = styled.div`
  ${props =>
    tw`w-full h-full flex flex-col justify-center content-center items-center`}
`;

const Frame = styled.div`
  ${props => tw`relative object-cover mb-4`}
  ${props => props.size}
`;

const ImageCard = ({ src, alt, title, size = 'md' }) => {
  const config = {
    md: tw`w-80 h-80`,
    lg: tw`w-11/12 lg:w-10/12 h-30r lg:h-40r`
  };

  return (
    <Card>
      <Frame size={config[size]}>
        <ImageCover src={src} alt={alt} />
      </Frame>
      {title && <Title>{title}</Title>}
    </Card>
  );
};

export default ImageCard;
