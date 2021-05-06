import tw, { styled } from 'twin.macro';

import { TextIcons, FullScreenContainer } from '@/atoms/index';
import { TitleTextBlock, ImageCard } from '@/molecules/index';

const Grids = styled.div`
  ${tw`grid grid-cols-1 lg:grid-cols-2 gap-8 h-full`}
  ${tw`justify-items-center items-center`}
  max-height: 50%;
`;

const Description = () => (
  <>
    <TitleTextBlock title="Develop 👨‍">
      <p>
        I'm frontend developer 👨‍💻 which using &nbsp;
        <TextIcons type="js" /> Javascript &nbsp;
        <TextIcons type="ts" /> Typescript to created maintanable software.
      </p>
    </TitleTextBlock>
  </>
);

const Frame = styled.div`
  ${props => tw`w-full h-full overflow-scroll shadow-inner`}
`;

const PersonTemplate = () => (
  <FullScreenContainer>
    <Grids>
      <Description />
      <Frame>
        <ImageCard
          src="/web-dev-image.svg"
          alt="image"
          title="quality"
          size="lg"
        />
      </Frame>
    </Grids>
  </FullScreenContainer>
);

export default PersonTemplate;
