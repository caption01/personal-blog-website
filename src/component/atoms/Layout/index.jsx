import tw, { styled } from 'twin.macro';

const FullScreenContainer = styled.div`
  ${tw`container mx-auto p-16`};
  height: 100vh;
`;

const Container = styled.div`
  ${tw`container mx-auto`}
`;

export { FullScreenContainer, Container };
