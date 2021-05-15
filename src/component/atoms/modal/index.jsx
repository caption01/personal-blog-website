const Layout = ({ children }) => (
  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
    {children}
  </div>
);

const Main = ({ children }) => (
  <div className="relative w-auto my-6 mx-auto max-w-3xl">{children}</div>
);

const Content = ({ children }) => (
  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
    {children}
  </div>
);

const Header = ({ children }) => (
  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
    {children}
  </div>
);

const Body = ({ children }) => (
  <div className="relative flex-auto">{children}</div>
);

const Footer = ({ onClick }) => (
  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
    <button
      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
      onClick={onClick}
    >
      Close
    </button>
  </div>
);

const Card = ({ children, onClick }) => (
  <>
    <Layout>
      <Main>
        <Content>
          {children}
          <Footer onClick={onClick} />
        </Content>
      </Main>
    </Layout>
    <div className="opacity-25 fixed inset-0 z-40 bg-black" />
  </>
);

export default {
  Card,
  Header,
  Body
};
