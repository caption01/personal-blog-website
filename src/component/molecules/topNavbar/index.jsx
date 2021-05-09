import tw, { styled } from 'twin.macro';

import { Title, ImageCover, AntdIcons } from '@/atoms/index';
import { map } from 'lodash';

const Navbar = styled.div`
  ${tw`fixed flex h-24 w-screen p-4 sticky bg-white z-10 shadow-md`}
  top: 0;
`;

const Right = styled.div(() => [
  tw`flex`,
  tw`h-full w-full`,
  tw`justify-end`,
  tw`items-center`
]);

const Left = styled.div(() => [
  tw`flex`,
  tw`h-full w-full`,
  tw`justify-start`,
  tw`items-center`,
  tw`space-x-8`
]);

const Frame = styled.div`
  ${tw`relative w-48 h-full`}
`;

const Menu = styled.div`
  ${tw`flex w-24 h-full items-center justify-center hover:bg-indigo-700 hover:text-white`};
  transition: 0.5s;
`;

const menu = [
  {
    icon: 'robot',
    section: 'person'
  },
  {
    icon: 'fire',
    section: 'stack'
  },
  {
    icon: 'app',
    section: 'select'
  }
];

const TopNavbar = () => (
  <Navbar>
    <Left>
      <Frame>
        <a href="#main">
          <ImageCover alt="logo" src="/nh-logo-3.png" />
        </a>
      </Frame>
    </Left>
    <Right>
      {map(menu, ({ icon, section }) => (
        <Menu key={icon}>
          <a href={`#${section}`}>
            <AntdIcons type={icon} />
          </a>
        </Menu>
      ))}
    </Right>
  </Navbar>
);
export default TopNavbar;
