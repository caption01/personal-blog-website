import tw, { styled } from 'twin.macro';
import { map } from 'lodash';

import { AntdIcons } from '@/atoms/index';
import useUnderline from '@/utility/styles/useUnderline';

const menu = [
  {
    icon: 'facebook',
    link: 'https://www.facebook.com/nutchapon.hanouypornlert/',
    path: '/facebook-icon.png'
  },
  {
    icon: 'linkin',
    link: 'https://www.linkedin.com/in/nutchapon-hanouypornlert-85794a174/',
    path: '/linkedin-icon.png'
  },
  {
    icon: 'medium',
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

const MenuIcon = ({ path, link, icon }) => (
  <Menu>
    <a key={path} target="_blank" href={link} rel="noreferrer">
      <AntdIcons type={icon} size="mdlg" />
    </a>
  </Menu>
);

const MenuWithUnderLine = useUnderline(MenuIcon);

const Footer = () => (
  <section id="contact">
    <Navbar>
      {map(menu, ({ link, path, icon }) => (
        <MenuWithUnderLine
          key={icon}
          link={link}
          path={path}
          icon={icon}
          line={false}
        />
      ))}
    </Navbar>
  </section>
);

export default Footer;
