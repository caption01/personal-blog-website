import tw, { styled } from 'twin.macro';

import { FullScreenContainer } from '@/atoms/index';
import { IconWithUnderline, IconWithFadeIn } from '@/molecules/index';
import { useFadeInFadeOut } from '@/utility/styles';

const Grids = styled.div`
  ${tw`grid grid-cols-1 gap-8 h-full relative shadow-inner`}
`;

const StyledText = styled.div`
  ${tw`flex flex-col justify-center items-center space-y-12
    text-7xl font-extrabold 
  `}

  line-height: 8rem;
`;

const BoxIcon = styled.div`
  ${tw`absolute flex`}
  top: 2rem;
  right: 2rem;
`;

const texts = [
  ['Hi 👋'],
  ['Welcome', 'To', '🌏 My Spaces 🌏 '],
  ["I'm", 'Developer 👨‍💻', 'on Web-Application'],
  ['Find Me']
];

const LandingTemplate = ({ done, onSkip, onFinish }) => {
  const [AnimatedTexts, reset] = useFadeInFadeOut({
    renderItems: texts,
    onFinish,
    finished: done
  });

  const onRefresh = () => reset();

  return (
    <FullScreenContainer>
      <Grids>
        <StyledText>
          <>
            {!done && <AnimatedTexts />}
            {done && <IconWithFadeIn type="chevron-down" css={tw`h-32 w-32`} />}
            {done && <div>Get Start</div>}
          </>
        </StyledText>
        <BoxIcon>
          <IconWithUnderline type="skip" onClick={onSkip} />
          <IconWithUnderline type="refresh" onClick={onRefresh} />
        </BoxIcon>
      </Grids>
    </FullScreenContainer>
  );
};

export default LandingTemplate;
