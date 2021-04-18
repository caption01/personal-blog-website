import tw, { styled } from 'twin.macro';
import { useTheme } from 'next-themes';

import { IconWithUnderline, TopNavbar } from '@/molecules/index';

const TopNavbarWithIcon = ({ onKey, onSkip, onRefresh, onMoon }) => (
  <TopNavbar>
    <IconWithUnderline type="key" onClick={onKey} />
    <IconWithUnderline type="skip" onClick={onSkip} />
    <IconWithUnderline type="refresh" onClick={onRefresh} />
    <IconWithUnderline type="moon" onClick={onMoon} />
  </TopNavbar>
);

export default TopNavbarWithIcon;
