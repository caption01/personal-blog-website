import tw, { styled } from 'twin.macro';
import { Title } from '@/atoms/index';

const Navbar = styled.div`
  ${tw`fixed flex h-24 w-screen p-4 sticky`}
  top: 0;
`;

const Right = styled.div(() => [
  tw`flex`,
  tw`h-full w-full`,
  tw`justify-end`,
  tw`items-center`,
  tw`space-x-8`
]);
const Left = styled.div(() => [
  tw`flex`,
  tw`h-full w-full`,
  tw`justify-start`,
  tw`items-center`,
  tw`space-x-8`
]);

const TopNavbar = ({ children, brands }) => (
  <Navbar>
    <Left>
      <Title>{brands}</Title>
    </Left>
    <Right>{children}</Right>
  </Navbar>
);
export default TopNavbar;
