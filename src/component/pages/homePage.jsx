import { useState } from 'react';
import { useTheme } from 'next-themes';
import tw from 'twin.macro';

import { TopNavbarWithIcon } from '@/organisms/index';
import { IconWithFadeIn } from '@/molecules/index';
import {
  LandingTemplate,
  WebAppTemplate,
  ScrollingTemplate,
  SelectionTemplate
} from '@/templates/index';
import { useFadeInFadeOut } from '@/utility/styles';

const texts = [
  ['Hi 👋'],
  ['Welcome', 'To', '🌏 My Spaces 🌏 '],
  ["I'm", 'Developer 👨‍💻', 'on Web-Application'],
  ['Find Me']
];

const LandingPage = () => {
  const [done, setDone] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMode = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');

  const [AnimatedTexts, reset] = useFadeInFadeOut({
    renderItems: texts,
    onFinish: setDone,
    finished: done
  });

  return (
    <>
      <TopNavbarWithIcon
        brands="Nutcha:💣"
        onSkip={() => setDone(true)}
        onRefresh={() => reset()}
        onMoon={() => toggleMode()}
      />
      <LandingTemplate>
        <>
          {!done && <AnimatedTexts />}
          {done && <IconWithFadeIn type="chevron-down" css={tw`h-32 w-32`} />}
          {done && <div>Get Start</div>}
        </>
      </LandingTemplate>
      <WebAppTemplate />
      <ScrollingTemplate />
      <SelectionTemplate />
    </>
  );
};

export default LandingPage;
