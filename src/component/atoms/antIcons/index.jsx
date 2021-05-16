import tw, { styled } from 'twin.macro';
import {
  FireOutlined,
  RobotOutlined,
  AppstoreAddOutlined,
  FacebookOutlined,
  MediumOutlined,
  LinkedinOutlined,
  FastForwardOutlined,
  UndoOutlined,
  MailOutlined
} from '@ant-design/icons';

const StyledIcon = styled.div`
  ${props => props.fontSize || tw`text-4xl`};
`;

const Icon = ({ type }) => {
  switch (type) {
    case 'robot':
      return <RobotOutlined />;
    case 'fire':
      return <FireOutlined />;
    case 'app':
      return <AppstoreAddOutlined />;
    case 'facebook':
      return <FacebookOutlined />;
    case 'medium':
      return <MediumOutlined />;
    case 'linkin':
      return <LinkedinOutlined />;
    case 'forward':
      return <FastForwardOutlined />;
    case 'undo':
      return <UndoOutlined />;
    case 'mail':
      return <MailOutlined />;

    default:
      return null;
  }
};

const AntdIcons = ({
  type,
  size = 'md',
  color,
  onClick,
  setMoblie = false
}) => {
  const config = {
    md: tw`text-4xl`,
    mdlg: !setMoblie ? tw`text-6xl` : tw`text-4xl md:text-6xl`,
    lg: !setMoblie ? tw`text-6xl` : tw`text-6xl md:text-8xl`
  };

  const fs = config[size];

  return (
    <StyledIcon fontSize={fs} color={color} onClick={onClick}>
      <Icon type={type} />
    </StyledIcon>
  );
};

export default AntdIcons;
