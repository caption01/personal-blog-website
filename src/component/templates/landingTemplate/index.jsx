import tw, { styled } from 'twin.macro';

const LandingLayout = styled.div`
  ${tw`container mx-auto border-4 border-gray-700 h-screen`}
`;

const LandingTemplate = ({ children }) => (
  <LandingLayout>{children}</LandingLayout>
);

export default LandingTemplate;
