import tw, { styled } from 'twin.macro';

import { Container } from '@/atoms/index';
import {
  StickTopBackButton,
  CenterTopic,
  ArticleCard
} from '@/organisms/index';
import { map } from 'lodash';

const data = [
  {
    id: '1',
    image:
      'https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
    link:
      'https://nhcoding.medium.com/life-2020-from-engineer-to-developer-5884166f7992',
    title: 'Tailwind EP.0 ',
    descriotion: [
      'Ep.0 start to build NextJs With Tailwind CSS + styledcomponent',
      'I try to create react component with atomic design system make your react component extreamly reuseable'
    ]
  }
];

const Wrapper = ({ children }) => (
  <div className="flex flex-wrap justify-around gap-x-8 gap-y-8">
    {children}
  </div>
);

const Page = ({ children }) => (
  <div className="relative h-screen overflow-scroll">{children}</div>
);

const ArticlePage = () => (
  <Page>
    <StickTopBackButton />
    <CenterTopic title="Articles" />
    <Container>
      <Wrapper>
        {map(data, d => (
          <ArticleCard key={d?.id} data={d} />
        ))}
      </Wrapper>
    </Container>
  </Page>
);

export default ArticlePage;
