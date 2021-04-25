import tw, { styled } from 'twin.macro';

import { ImageResponsiveSize, TextIcons } from '@/atoms/index';
import { TitleTextBlock } from '@/molecules/index';

const Layout = styled.div`
  ${tw`container mx-auto`};
  height: 100vh;
`;

const Grids = styled.div`
  ${tw`grid grid-cols-1 lg:grid-cols-2 gap-8 h-full`}
  ${tw`justify-items-center items-center`}
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
  <Layout>
    <Grids>
      <Description />
      <ImageResponsiveSize imageSrc="/web-dev-image.svg" />
    </Grids>
  </Layout>
);

export default WebAppTemplate;
