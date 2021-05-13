import styled from 'styled-components';
import tw from 'twin.macro';

import { Header } from '@/atoms/index';
import { TitleTextBlock } from '@/molecules/index';

const Topic = styled.div`
  ${tw`mx-auto w-3/4 md:w-1/2 mb-16`}
`;

const CenterTopic = ({ title = 'sample' }) => (
  <Topic>
    <Header>
      <TitleTextBlock title={title} />
    </Header>
  </Topic>
);

export default CenterTopic;
