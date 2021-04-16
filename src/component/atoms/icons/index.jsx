import tw, { styled } from 'twin.macro';
import { MoonIcon, KeyIcon } from '@heroicons/react/solid';

const Icons = ({ type, ...props }) => {
  const iconStyle = tw`h-16 w-16 text-gray-900`;
  switch (type) {
    case 'moon': {
      return <MoonIcon css={iconStyle} {...props} />;
    }

    case 'key': {
      return <KeyIcon css={iconStyle} {...props} />;
    }

    default:
      return null;
  }
};

export default Icons;
