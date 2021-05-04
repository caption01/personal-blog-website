import tw, { styled } from 'twin.macro';

import { FullScreenContainer, Title } from '@/atoms/index';
import { SelectionCard, TitleTextBlock } from '@/molecules/index';

const Grids = styled.div`
  ${props => tw`grid grid-cols-3 gap-4 h-full`}
  max-height: 50%;
`;

const Header = styled.div`
  ${props => tw`text-center mx-auto mb-32 w-1/2`}
`;

const Col = styled.div`
  ${props => tw`w-full h-full`}
`;

const SelectionTemplate = () => {
  return (
    <FullScreenContainer>
      <Header>
        <TitleTextBlock title="More 🚀" />
      </Header>
      <Grids>
        <Col>
          <SelectionCard src="/project.svg" link="projects" title="PROJECT" />
        </Col>
        <Col>
          <SelectionCard src="/blog.svg" link="blogs" title="MY BLOG" />
        </Col>
        <Col>
          <SelectionCard src="/demo.svg" link="Demos" title="MY DEMO" />
        </Col>
      </Grids>
    </FullScreenContainer>
  );
};

export default SelectionTemplate;
