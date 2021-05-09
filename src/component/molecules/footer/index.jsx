import tw, { styled } from 'twin.macro';
import { map } from 'lodash';

import { AntdIcons } from '@/atoms/index';
import useUnderline from '@/utility/styles/useUnderline';

const menu = [
  {
    type: 'facebook',
    link: 'https://www.facebook.com/nutchapon.hanouypornlert/',
    path: '/facebook-icon.png'
  },
  {
    type: 'linkin',
    link: 'https://www.linkedin.com/in/nutchapon-hanouypornlert-85794a174/',
    path: '/linkedin-icon.png'
  },
  {
    type: 'medium',
    link: 'https://medium.com/@nhcoding',
    path: '/medium-icon.svg'
  }
];

const Navbar = styled.div`
  ${tw`h-24 w-screen p-8 bg-indigo-600 flex justify-center items-center`}
`;

const Menu = styled.div`
  ${tw`flex w-24 h-full items-center justify-center hover:text-white`};
  transition: 0.5s;
`;

const MenuIcon = ({ path, link, type }) => (
  <Menu>
    <a key={path} target="_blank" href={link} rel="noreferrer">
      <AntdIcons type={type} size="mdlg" />
    </a>
  </Menu>
);

const MenuWithUnderLine = useUnderline(MenuIcon);

const Footer = () => (
  <Navbar>
    {map(menu, ({ link, path, type }) => (
      <MenuWithUnderLine
        key={type}
        link={link}
        path={path}
        type={type}
        line={false}
      />
    ))}
  </Navbar>
);

export default Footer;
