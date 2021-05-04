import tw, { styled } from 'twin.macro';
import Link from 'next/link';

const Box = styled.div`
  ${props => tw`rounded-md shadow`}
`;

const LinkText = styled.a`
  ${props =>
    tw`w-full flex 
    items-center justify-center px-8 py-3 
    border border-transparent 
    text-4xl font-medium rounded-md text-white 
    bg-indigo-600 hover:bg-indigo-700 md:py-4 md:px-10 cursor-pointer`}
`;

const LinkButton = ({ link = '#', title = 'click' }) => (
  <Box>
    <Link href={link}>
      <LinkText>{title}</LinkText>
    </Link>
  </Box>
);

export default LinkButton;
