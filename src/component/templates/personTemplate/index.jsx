import tw, { styled } from 'twin.macro';

import { TextIcons, FullScreenContainer } from '@/atoms/index';
import { TitleTextBlock, ImageCard } from '@/molecules/index';

const Grids = styled.div`
  ${tw`grid grid-cols-1 lg:grid-cols-2 gap-8 h-full relative`}
  ${tw`justify-items-center items-center`}
  
  ${tw`max-h-full lg:max-h-full`}
`;

const CenterLayout = styled.div`
  ${tw`flex items-center h-full`}
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
  <section id="person">
    <FullScreenContainer>
      <CenterLayout>
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
      </CenterLayout>
    </FullScreenContainer>
  </section>
);

export default PersonTemplate;
