import { useState } from 'react';
import { useTheme } from 'next-themes';

import { TopNavbarWithIcon } from '@/organisms/index';
import { IconWithFadeIn } from '@/molecules/index';
import { LandingTemplate } from '@/templates/index';
import { useFadeInFadeOut } from '@/utility/styles';

const texts = [
  ['Hi 👋'],
  ['Welcome', 'To', 'My Spaces 🌏 🌳'],
  ["I'm", 'Developer 👨‍💻', 'on Web-Application'],
  ['Find Me']
];

const LandingPage = () => {
  const [done, setDone] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMode = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');

  const [FadedComponent, reset] = useFadeInFadeOut({
    renderItems: texts,
    onFinish: setDone,
    finished: done
  });

  return (
    <>
      <TopNavbarWithIcon
        onSkip={() => setDone(true)}
        onRefresh={() => reset()}
        onMoon={() => toggleMode()}
      />
      <LandingTemplate>
        <>
          {!done ? (
            <FadedComponent />
          ) : (
            <IconWithFadeIn type="book" active={done} />
          )}
        </>
      </LandingTemplate>
    </>
  );
};

export default LandingPage;
