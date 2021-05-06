import { useState } from 'react';
// import { useTheme } from 'next-themes';
import tw from 'twin.macro';

// import { TopNavbarWithIcon } from '@/organisms/index';
import { Footer, TopNavbar } from '@/molecules/index';
import {
  LandingTemplate,
  PersonTemplate,
  ScrollingTemplate,
  SelectionTemplate
} from '@/templates/index';
import styled from 'styled-components';

const Layout = styled.div`
  ${tw`relative`}
`;

const LandingPage = () => {
  const [done, setDone] = useState(false);
  // const { theme, setTheme } = useTheme();

  // const toggleMode = () =>
  //   theme === 'light' ? setTheme('dark') : setTheme('light');

  const onSkip = () => setDone(true);
  const onFinish = status => setDone(status);

  return (
    <Layout>
      <TopNavbar brands="Nutcha:💣" />
      <LandingTemplate done={done} onSkip={onSkip} onFinish={onFinish} />
      <PersonTemplate />
      <ScrollingTemplate />
      <SelectionTemplate />
      <Footer />
    </Layout>
  );
};

export default LandingPage;
