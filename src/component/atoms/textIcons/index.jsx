import tw, { styled } from 'twin.macro';

const InlineIconText = styled.img`
  ${tw`inline-flex h-8 w-8`}
`;

const JsIconSvg = () => <InlineIconText src="/js-icon.svg" alt="js-icon" />;
const TsIconSvg = () => <InlineIconText src="/ts-icon.svg" alt="js-icon" />;

const TextIcons = ({ type }) => {
  switch (type) {
    case 'js':
      return <JsIconSvg />;

    case 'ts':
      return <TsIconSvg />;

    default:
      return null;
  }
};

export default TextIcons;
