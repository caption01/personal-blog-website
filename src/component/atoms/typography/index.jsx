import tw, { styled } from 'twin.macro';

const StyledH1 = styled.h1`
  ${props => tw`text-8xl`}
`;

const Header = ({ children }) => <StyledH1>{children}</StyledH1>;

export { Header };
