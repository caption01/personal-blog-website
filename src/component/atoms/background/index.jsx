import tw, { styled } from 'twin.macro';

const ColorDiv = styled.div(({ color }) => [tw`w-full`, tw`h-full`, color]);

const Background = ({ children, color = 'white' }) => {
  const bgColors = {
    white: tw`bg-white`
  };

  return <ColorDiv color={bgColors[color]}>{children}</ColorDiv>;
};

export default Background;
