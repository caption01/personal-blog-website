import tw, { styled } from 'twin.macro';
import { map } from 'lodash';

import { Container } from '@/atoms/index';
import {
  StickTopBackButton,
  CenterTopic,
  ArticleCard
} from '@/organisms/index';
import { articles } from '@/mocks/index';

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
        {map(articles, d => (
          <ArticleCard key={d?.id} data={d} />
        ))}
      </Wrapper>
    </Container>
  </Page>
);

export default ArticlePage;
