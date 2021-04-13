import tw, { styled } from 'twin.macro';

import { P } from '@/atoms/index';

const Layout = styled.div`
  ${tw`box-border border-4 m-8 p-8 flex justify-center`}
`;

const Text = styled.div`
  ${tw`bg-blue-300`}
`;

const IndexPage = () => (
  <Layout>
    <Text>Almost before we knew it, we had left the ground.</Text>
    <P>New text.</P>
  </Layout>
);

export default IndexPage;
