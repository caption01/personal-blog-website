import tw, { styled } from 'twin.macro';

const StyledHeader = styled.div`
  ${props => tw`text-8xl`}
`;

const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>;

const StyledTitle = styled.div`
  ${props => tw`text-4xl`}
`;

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;

export { Header, Title };
