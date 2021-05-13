import tw, { styled } from 'twin.macro';
import Link from 'next/link';

const Boarder = styled.div`
  ${props => tw`rounded-md shadow`}
`;

const Body = styled.div`
  ${props =>
    tw`w-full h-full flex 
    items-center justify-center px-8 py-3 
    border border-transparent 
    text-4xl font-medium rounded-md text-white 
    bg-indigo-600 hover:bg-indigo-700 md:py-4 md:px-10 cursor-pointer`}
`;

const Button = ({ onClick, title = 'click' }) => (
  <Boarder>
    <Body onClick={onClick}>{title}</Body>
  </Boarder>
);

export default Button;
