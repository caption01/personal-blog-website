import tw, { styled } from 'twin.macro';

const Border = styled.div`
  ${tw`p-8 shadow-md max-w-lg`}
`;

const CardLayout = styled.div`
  ${tw`relative w-full h-full`}
`;

const Header = ({ children }) => (
  <div className="flex relative items-start justify-between items-center border-b border-solid border-blueGray-200 rounded-t p-4">
    {children}
  </div>
);

const Footer = ({ children }) => <div className="w-full p-4">{children}</div>;

const Content = ({ children }) => (
  <div className="w-full h-full p-4">{children}</div>
);

const Layout = ({ children }) => (
  <Border>
    <CardLayout>{children}</CardLayout>
  </Border>
);

export default {
  Layout,
  Header,
  Content,
  Footer
};
