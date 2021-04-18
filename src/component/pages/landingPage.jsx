import { useState } from 'react';

import { LandingTemplate } from '@/templates/index';
import { TopNavbar } from '@/molecules/index';
import { useFadeInFadeOut } from '@/utility/styles';

const texts = [
  ['Hi 👋'],
  ['Welcome', 'To', 'My Spaces 🌏 🌳'],
  ["I'm", 'Developer 👨‍💻', 'on Web-Application'],
  ['Find Me']
];

const LandingPage = () => {
  const [done, setDone] = useState(false);

  const [FadedComponent, reset] = useFadeInFadeOut({
    renderItems: texts,
    onFinish: setDone
  });

  return (
    <>
      <TopNavbar reset={reset} />
      <LandingTemplate>
        <FadedComponent />
      </LandingTemplate>
    </>
  );
};

export default LandingPage;
