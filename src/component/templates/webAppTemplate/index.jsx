import tw, { styled } from 'twin.macro';
import Image from 'next/image';

import { Title, Text, ImageResponsiveSize } from '@/atoms/index';
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
        I'm frontend developer which using Javascript and Typescript to created
        maintanable code
      </p>
    </TitleTextBlock>
  </>
);

const WebAppTemplate = () => (
  <Layout>
    <Grids>
      <ImageResponsiveSize imageSrc="/web-dev-image.svg" />
      <Description />
    </Grids>
  </Layout>
);

export default WebAppTemplate;
