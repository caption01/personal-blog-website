import { IconWithUnderline, TopNavbar } from '@/molecules/index';

const TopNavbarWithIcon = ({ brands, onKey, onSkip, onRefresh, onMoon }) => (
  <TopNavbar brands={brands}>
    {/* <IconWithUnderline type="key" onClick={onKey} /> */}
    {/* <IconWithUnderline type="skip" onClick={onSkip} />
    <IconWithUnderline type="refresh" onClick={onRefresh} /> */}
    {/* <IconWithUnderline type="moon" onClick={onMoon} /> */}
  </TopNavbar>
);

export default TopNavbarWithIcon;
