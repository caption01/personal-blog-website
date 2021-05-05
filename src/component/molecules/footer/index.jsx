import tw, { styled } from 'twin.macro';
import { map } from 'lodash';

import { ImageCover } from '@/atoms/index';
import useUnderline from '@/utility/styles/useUnderline';

const menu = [
  {
    link: 'https://www.facebook.com/nutchapon.hanouypornlert/',
    path: '/facebook-icon.png'
  },
  {
    link: 'https://www.linkedin.com/in/nutchapon-hanouypornlert-85794a174/',
    path: '/linkedin-icon.png'
  },
  {
    link: 'https://medium.com/@nhcoding',
    path: '/medium-icon.svg'
  }
];

const Navbar = styled.div`
  ${tw`h-24 w-screen p-8 bg-indigo-600 flex justify-center items-center`}
`;

const BoxIcon = styled.div`
  ${tw`w-16 h-16 relative mx-4`}
`;

const Icon = ({ src, onClick }) => (
  <BoxIcon onClick={onClick}>
    <ImageCover src={src} />
  </BoxIcon>
);

const IconUnderline = useUnderline(Icon);

const Footer = () => (
  <Navbar>
    {map(menu, ({ link, path }) => (
      <a key={path} target="_blank" href={link} rel="noreferrer">
        <IconUnderline src={path} line={false} />
      </a>
    ))}
  </Navbar>
);

export default Footer;
