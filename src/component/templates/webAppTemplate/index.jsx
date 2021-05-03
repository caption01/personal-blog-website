import tw, { styled } from 'twin.macro';

import {
  ImageResponsiveSize,
  TextIcons,
  FullScreenContainer
} from '@/atoms/index';
import { TitleTextBlock } from '@/molecules/index';

const Grids = styled.div`
  ${tw`grid grid-cols-1 lg:grid-cols-2 gap-8 h-full`}
  ${tw`justify-items-center items-center`}
  max-height: 50%;
`;

const Description = () => (
  <>
    <TitleTextBlock title="Develop">
      <p>
        I'm frontend developer 👨‍💻 which using &nbsp;
        <TextIcons type="js" /> Javascript &nbsp;
        <TextIcons type="ts" /> Typescript to created maintanable software.
      </p>
    </TitleTextBlock>
  </>
);

const WebAppTemplate = () => (
  <FullScreenContainer>
    <Grids>
      <Description />
      <ImageResponsiveSize imageSrc="/web-dev-image.svg" />
    </Grids>
  </FullScreenContainer>
);

export default WebAppTemplate;
