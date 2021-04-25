import tw, { styled } from 'twin.macro';

import { Title, Text } from '@/atoms/index';

const CenterTitle = styled.div`
  ${tw`text-center border-b-2 mx-8`}
`;

const Content = styled.div`
  ${tw`p-8 text-justify`}
  text-indent: 4rem;
`;

const TitleTextBlock = ({ title, children }) => (
  <div>
    <CenterTitle>
      <Title>{title}</Title>
    </CenterTitle>
    <Content>
      <Text>{children}</Text>
    </Content>
  </div>
);

export default TitleTextBlock;
