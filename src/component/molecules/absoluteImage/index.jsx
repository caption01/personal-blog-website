import tw, { styled } from 'twin.macro';

import { ImageCover } from '@/atoms/index';

const AbsBottomLayout = styled.div`
  z-index: 10;
  position: ${props => props?.type || 'absolute'};
  bottom: ${props => props?.bottom || '-8rem'};
  right: ${props => props?.right || '0rem'};
`;

const Frame = styled.div`
  ${tw`w-80 h-80 relative`}
`;

const ImageWithPostion = ({ position, config, children }) => {
  switch (position) {
    case 'bottom':
      return <AbsBottomLayout {...config}>{children}</AbsBottomLayout>;

    default:
      return <AbsBottomLayout {...config}>{children}</AbsBottomLayout>;
  }
};

const AbsoluteImage = ({
  position = 'bottom',
  config = {},
  src = '',
  alt = 'img'
}) => (
  <ImageWithPostion position={position} config={config}>
    <Frame>
      <ImageCover src={src} alt={alt} />
    </Frame>
  </ImageWithPostion>
);

export default AbsoluteImage;
