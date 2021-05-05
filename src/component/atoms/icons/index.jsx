import tw from 'twin.macro';
import {
  MoonIcon,
  KeyIcon,
  RefreshIcon,
  BookOpenIcon,
  ChevronDoubleRightIcon,
  ChevronDoubleDownIcon
} from '@heroicons/react/solid';

const Icons = ({ type, onClick, ...props }) => {
  const iconStyle = tw`h-16 w-16`;
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
    case 'book': {
      return <BookOpenIcon css={iconStyle} {...props} onClick={onClick} />;
    }
    case 'skip': {
      return (
        <ChevronDoubleRightIcon css={iconStyle} {...props} onClick={onClick} />
      );
    }

    case 'chevron-down': {
      return (
        <ChevronDoubleDownIcon css={iconStyle} {...props} onClick={onClick} />
      );
    }

    default:
      return null;
  }
};

export default Icons;
