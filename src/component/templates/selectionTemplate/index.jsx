import tw, { styled } from 'twin.macro';

import { FullScreenContainer } from '@/atoms/index';
import { SelectionCard, TitleTextBlock } from '@/molecules/index';
import { map } from 'lodash';

const Grids = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 h-full`}
  ${tw`max-h-3/4 lg:max-h-1/2 overflow-scroll`}
`;

const Header = styled.div`
  ${tw`text-center mx-auto mb-32 w-full md:w-1/2`}
`;

const Col = styled.div`
  ${tw`w-full h-full`}
`;

const data = [
  {
    image: '/selection-project.svg',
    link: 'projects',
    title: 'PROJECT'
  },
  {
    image: '/selection-blog.svg',
    link: 'articles',
    title: 'ARTICLE'
  },
  {
    image: '/selection-demo.svg',
    link: 'Demos',
    title: 'DEMO'
  }
];

const SelectionTemplate = () => (
  <section id="select">
    <FullScreenContainer>
      <Header>
        <TitleTextBlock title="More 🚀" />
      </Header>
      <Grids>
        {map(data, (d, idx) => (
          <Col key={idx}>
            <SelectionCard src={d.image} link={d.link} title={d.title} />
          </Col>
        ))}
      </Grids>
    </FullScreenContainer>
  </section>
);

export default SelectionTemplate;
