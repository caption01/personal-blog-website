import tw, { styled } from 'twin.macro';
import { useTheme } from 'next-themes';

import { Icons } from '@/atoms/index';

import useUnderline from '../../../utility/styles/useUnderline';

const Navbar = styled.div(() => [tw`container mx-auto`, tw`h-36`]);
const Content = styled.div(() => [
  tw`flex`,
  tw`h-full w-full`,
  tw`justify-end`,
  tw`items-center`,
  tw`space-x-8`
]);

const IconKeyWithUnderline = useUnderline(Icons);
const IconMoonWithUnderline = useUnderline(Icons);

const TopNavbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleMode = () => {
    return theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <Navbar>
      <Content>
        <IconKeyWithUnderline type="key" />
        <IconMoonWithUnderline type="moon" onClick={toggleMode} />
      </Content>
    </Navbar>
  );
};

export default TopNavbar;
