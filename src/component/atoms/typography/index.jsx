import tw, { styled } from 'twin.macro';

const StyledHeader = styled.div`
  ${props => tw`text-8xl`}
`;

const StyledTitle = styled.div`
  ${props => tw`text-4xl`}
`;

const StyledText = styled.div`
  ${props => tw`text-2xl`}
`;

const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>;

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;

const Text = ({ children }) => <StyledText>{children}</StyledText>;

export { Header, Title, Text };
