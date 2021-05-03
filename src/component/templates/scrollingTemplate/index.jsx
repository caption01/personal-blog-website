import React from 'react';
import tw, { styled } from 'twin.macro';
import { map } from 'lodash';

import { Title } from '@/atoms/index';
import { TitleTextBlock } from '@/molecules/index';

const stacks = [
  { title: 'React', path: '/react-icon.svg' },
  { title: 'NextJs', path: '/nextjs-icon.png' },
  { title: 'TailwindCss', path: '/tailwind-icon.svg' },
  { title: 'Antd', path: '/antd-icon.svg' },
  { title: 'GraphQL', path: '/graphql-icon.png' }
];

const Layout = styled.div`
  ${tw`container mx-auto relative`};
  height: 200vh;
`;

const Grids = styled.div`
  ${tw`grid grid-cols-1 lg:grid-cols-2 gap-8 h-full`}
  ${tw`justify-items-center items-stretch`}
`;

const FixCenter = styled.div`
  ${tw`sticky top-2/4`}
`;

const ExpandedImage = styled.div`
  ${tw`flex flex-col justify-between items-center text-center`}
`;

const Description = () => (
  <div>
    <FixCenter>
      <TitleTextBlock title="Stack ❤" />
    </FixCenter>
  </div>
);

const ShuffleTemplate = () => (
  <Layout>
    <Grids>
      <Description />
      <ExpandedImage>
        {map(stacks, ({ title, path }) => (
          <div key={path}>
            <img src={path} alt="imgs" width={200} height={200} />
            <Title>{title}</Title>
          </div>
        ))}
      </ExpandedImage>
    </Grids>
  </Layout>
);

export default ShuffleTemplate;
