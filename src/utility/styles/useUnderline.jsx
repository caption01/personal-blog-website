import { useTheme } from 'next-themes';
import tw, { styled } from 'twin.macro';

const UnderlineStyled = styled.div`
  position: relative;
  transition-duration: 0.5s;

  ${({ isDarkMode }) => `
    &:before,
    &:after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      width: 0rem;
      height: 0.5rem;
      margin: 0.5rem 0 0;
      transition-duration: 0.5s;
      opacity: 0;
      background-color: ${isDarkMode ? 'white' : 'black'};
    }`}

  ${({ line }) => `
    &:hover {
      transform: scale(1.1, 1.1);
      transform: translate(0, -0.3rem);
      cursor: pointer;
      &:after {
        left: 0;
        width: ${line ? '100%' : 0};
        opacity: 1;
      }
    }
  `}
`;

const useUnderline = WrapperComponent => wrapperProps => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const { line = true } = wrapperProps;

  return (
    <UnderlineStyled isDarkMode={isDarkMode} line={line}>
      <WrapperComponent {...wrapperProps} />
    </UnderlineStyled>
  );
};

export default useUnderline;
