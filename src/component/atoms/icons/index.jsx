import tw, { styled } from 'twin.macro';
import { MoonIcon, KeyIcon } from '@heroicons/react/solid';

const Icons = ({ type, onClick, ...props }) => {
  const iconStyle = tw`h-16 w-16 text-gray-900 dark:text-gray-50`;

  switch (type) {
    case 'moon': {
      return <MoonIcon css={iconStyle} {...props} onClick={onClick} />;
    }

    case 'key': {
      return <KeyIcon css={iconStyle} {...props} onClick={onClick} />;
    }

    default:
      return null;
  }
};

export default Icons;
