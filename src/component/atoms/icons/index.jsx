import tw from 'twin.macro';
import { MoonIcon, KeyIcon, RefreshIcon } from '@heroicons/react/solid';

const Icons = ({ type, onClick, ...props }) => {
  const iconStyle = tw`h-16 w-16 text-black dark:text-white`;

  switch (type) {
    case 'moon': {
      return <MoonIcon css={iconStyle} {...props} onClick={onClick} />;
    }

    case 'key': {
      return <KeyIcon css={iconStyle} {...props} onClick={onClick} />;
    }

    case 'refresh': {
      return <RefreshIcon css={iconStyle} {...props} onClick={onClick} />;
    }

    default:
      return null;
  }
};

export default Icons;
