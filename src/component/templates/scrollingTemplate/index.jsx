import React from 'react';
import tw, { styled } from 'twin.macro';
import { map } from 'lodash';

import { TitleTextBlock, ImageCard } from '@/molecules/index';
import { FullScreenContainer } from '@/atoms/index';

const stacks = [
  { title: 'React', path: '/react-icon.svg' },
  { title: 'NextJs', path: '/nextjs-icon.png' },
  { title: 'TailwindCss', path: '/tailwind-icon.svg' },
  { title: 'Antd', path: '/antd-icon.svg' },
  { title: 'GraphQL', path: '/graphql-icon.png' }
];

const Grids = styled.div`
  ${tw`grid grid-cols-1 lg:grid-cols-2 gap-8 h-full`}
  ${tw`justify-items-center items-stretch`}
  max-height: 50%;
`;

const Center = styled.div`
  ${tw`flex justify-center items-center`}
`;

const ScrollingBox = styled.div`
  ${tw`flex w-full overflow-scroll shadow-inner`}
`;

const Box = styled.div`
  ${tw`mr-40`}
`;

const Description = () => (
  <Center>
    <TitleTextBlock title="Stack ❤" />
  </Center>
);

const ScrollingImageTemplate = () => (
  <FullScreenContainer>
    <Grids>
      <Description />
      <ScrollingBox>
        {map(stacks, ({ title, path }) => (
          <Box key={path}>
            <ImageCard src={path} alt="imgs" title={title} size="md" />
          </Box>
        ))}
      </ScrollingBox>
    </Grids>
  </FullScreenContainer>
);

export default ScrollingImageTemplate;
