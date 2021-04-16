import tw, { styled } from 'twin.macro';

import { Background, Icons } from '@/atoms/index';

import useUnderline from '../../../utility/styles/useUnderline';

const Navbar = styled.div(() => [tw`container mx-auto`, tw`h-36`]);
const Content = styled.div(() => [
  tw`flex`,
  tw`h-full`,
  tw`justify-end`,
  tw`items-center`
]);

const IconKeyWithUnderline = useUnderline(Icons);
const IconMoonWithUnderline = useUnderline(Icons);

const TopNavbar = () => {
  return (
    <Navbar>
      <Background color="white">
        <Content>
          <IconKeyWithUnderline type="key" />
          <IconMoonWithUnderline type="moon" />
        </Content>
      </Background>
    </Navbar>
  );
};

export default TopNavbar;
