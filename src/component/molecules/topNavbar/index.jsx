import tw, { styled } from 'twin.macro';

import { Background } from '@/atoms/index';

const Navbar = styled.div(() => [tw`container mx-auto`, tw`h-32`, tw`mb-32`]);

const TopNavbar = () => {
  return (
    <Navbar>
      <Background>top-navbar</Background>
    </Navbar>
  );
};

export default TopNavbar;
