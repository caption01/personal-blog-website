import tw, { styled } from 'twin.macro';

const Navbar = styled.div(() => [tw`container mx-auto`, tw`h-36`]);
const Content = styled.div(() => [
  tw`flex`,
  tw`h-full w-full`,
  tw`justify-end`,
  tw`items-center`,
  tw`space-x-8`
]);

const TopNavbar = ({ children }) => (
  <Navbar>
    <Content>{children}</Content>
  </Navbar>
);
export default TopNavbar;
