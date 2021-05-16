import tw, { styled } from 'twin.macro';

import { FullScreenContainer, AntdIcons } from '@/atoms/index';
import { IconWithFadeIn, AbsoluteImage } from '@/molecules/index';
import { useFadeInFadeOut, useUnderline } from '@/utility/styles';

const Grids = styled.div`
  ${tw`grid grid-cols-1 gap-8 h-full relative shadow-md`}
  ${tw`max-h-3/4`}
`;

const StyledText = styled.div`
  ${tw`flex flex-col justify-center items-center space-y-12
    text-4xl md:text-5xl lg:text-7xl font-bold 
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

const IconWithUnderline = useUnderline(AntdIcons);

const LandingTemplate = ({ done, onSkip, onFinish }) => {
  const [AnimatedTexts, reset] = useFadeInFadeOut({
    renderItems: texts,
    onFinish,
    finished: done
  });

  const onRefresh = () => reset();

  return (
    <section id="main">
      <FullScreenContainer>
        <Grids>
          <StyledText>
            <>
              {!done && <AnimatedTexts />}
              {done && (
                <IconWithFadeIn
                  type="chevron-down"
                  css={tw`h-16 w-16 md:h-32 w-32`}
                />
              )}
              {done && <div>Get Start</div>}
            </>
          </StyledText>
          <BoxIcon>
            <IconWithUnderline
              type="forward"
              size="mdlg"
              onClick={onSkip}
              setMoblie
            />
            <IconWithUnderline
              type="undo"
              size="mdlg"
              onClick={onRefresh}
              setMoblie
            />
          </BoxIcon>
          <AbsoluteImage
            position="bottom"
            src="/background/bg-lost.svg"
            alt="as"
          />
        </Grids>
      </FullScreenContainer>
    </section>
  );
};

export default LandingTemplate;
