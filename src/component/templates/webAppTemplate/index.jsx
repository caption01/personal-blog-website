import tw, { styled } from 'twin.macro';
import Image from 'next/image';

import { Title, Text, ImageResponsiveSize } from '@/atoms/index';

const Layout = styled.div`
  ${tw`container mx-auto`};
  height: 75vh;
`;

const Grids = styled.div`
  ${tw`grid grid-cols-1 lg:grid-cols-2 gap-8 h-full`}
  ${tw`justify-items-center items-center`}
`;

const WebAppTemplate = () => (
  <Layout>
    <Grids>
      <ImageResponsiveSize imageSrc="/web-dev-image.svg" />
      <div>
        <Title>WebApplication</Title>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit libero
          fuga dolores incidunt pariatur, voluptatem est placeat magnam aliquam
          sequi aliquid dolorum assumenda consectetur omnis quis quae
          reprehenderit sapiente nemo.
        </Text>
      </div>
    </Grids>
  </Layout>
);

export default WebAppTemplate;
