import tw, { styled } from 'twin.macro';

const StyledDiv = styled.div`
  ${tw`rounded-full h-20 w-20 
  flex items-center justify-center 
  bg-indigo-600 hover:bg-indigo-700
  overflow-hidden
  `}
`;

const Circle = ({ children }) => <StyledDiv>{children}</StyledDiv>;

export default Circle;
