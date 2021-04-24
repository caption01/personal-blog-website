import tw, { styled } from 'twin.macro';

const StyledHeader = styled.div`
  ${props => tw`text-8xl font-extrabold mb-4 tracking-wide`}
`;

const StyledTitle = styled.div`
  ${props => tw`text-6xl font-extrabold mb-4 tracking-wide`}
`;

const StyledText = styled.div`
  ${props => tw`text-4xl mb-4 tracking-wide`}
`;

const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>;

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;

const Text = ({ children }) => <StyledText>{children}</StyledText>;

export { Header, Title, Text };
