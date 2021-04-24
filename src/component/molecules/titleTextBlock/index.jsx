import tw, { styled } from 'twin.macro';

import { Title, Text } from '@/atoms/index';

const CenterTitle = styled.div`
  ${tw`text-center`}
`;

const Content = styled.div`
  ${tw`p-8`}
`;

const TitleTextBlock = ({ title, text }) => (
  <>
    <CenterTitle>
      <Title>{title}</Title>
    </CenterTitle>
    <Content>
      <Text>{text}</Text>
    </Content>
  </>
);

export default TitleTextBlock;
