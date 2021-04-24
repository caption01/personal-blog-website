import tw, { styled } from 'twin.macro';
import { Header } from '@/atoms/index';

const Navbar = styled.div(() => [tw`container mx-auto flex`, tw`h-36`]);
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
      <Header>{brands}</Header>
    </Left>
    <Right>{children}</Right>
  </Navbar>
);
export default TopNavbar;
