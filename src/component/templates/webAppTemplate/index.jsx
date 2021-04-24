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

const title = 'Frontend';
const text =
  "I'm building web application based on React library with modern UI frame-work such as Tailwind or Antd. Coding with both js & ts language.";

const WebAppTemplate = () => (
  <Layout>
    <Grids>
      <ImageResponsiveSize imageSrc="/web-dev-image.svg" />
      <div>
        <TitleTextBlock title={title} text={text} />
      </div>
    </Grids>
  </Layout>
);

export default WebAppTemplate;
