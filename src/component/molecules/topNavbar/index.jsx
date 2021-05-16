import tw, { styled } from 'twin.macro';
import { useState, useEffect } from 'react';

import { ImageCover, AntdIcons } from '@/atoms/index';
import { map, debounce } from 'lodash';

const Navbar = styled.div`
  ${tw`fixed flex h-24 w-screen p-4 sticky bg-white z-10 shadow-md transform duration-300`}
  ${props => `opacity: ${props.visible ? '1' : '0'}`};
  ${props => `visibility: ${props.visible ? 'visibility' : 'hidden'}`};
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
  },
  {
    icon: 'mail',
    section: 'contact'
  }
];

const TopNavbar = () => {
  const [prevScrollPos, setScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScorll = window.pageYOffset;

    if (currentScorll > prevScrollPos && currentScorll - prevScrollPos > 50) {
      setScrollPos(currentScorll);
      setVisible(false);
    }

    if (
      (prevScrollPos > currentScorll && prevScrollPos - currentScorll > 50) ||
      currentScorll < 100
    ) {
      setScrollPos(currentScorll);
      setVisible(true);
    }
  };

  const delayScroll = debounce(handleScroll, 50);

  useEffect(() => {
    window.addEventListener('scroll', delayScroll);
    return () => window.removeEventListener('scroll', delayScroll);
  }, [prevScrollPos, visible]);

  return (
    <Navbar visible={visible}>
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
};
export default TopNavbar;
