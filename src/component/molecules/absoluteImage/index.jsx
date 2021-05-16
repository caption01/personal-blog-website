import tw, { styled } from 'twin.macro';

import { ImageCover } from '@/atoms/index';

const AbsBottomLayout = styled.div`
  ${tw`absolute z-10`}
  bottom: -8rem;
  right: 0;
`;

const Frame = styled.div`
  ${tw`w-80 h-80`}
`;

const ImageWithPostion = ({ position, children }) => {
  switch (position) {
    case 'bottom':
      return <AbsBottomLayout>{children}</AbsBottomLayout>;

    default:
      return <AbsBottomLayout>{children}</AbsBottomLayout>;
  }
};

const AbsoluteImage = ({ position = 'bottom', src = '', alt = 'img' }) => (
  <ImageWithPostion position={position}>
    <Frame>
      <ImageCover src={src} alt={alt} />
    </Frame>
  </ImageWithPostion>
);

export default AbsoluteImage;
