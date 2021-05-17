const Body = ({ children }) => (
  <div className="relative flex-auto">{children}</div>
);

const Block = ({ text }) => (
  <div className="relative px-0 flex-auto">
    <p className="my-4 text-blueGray-500 text-xl leading-relaxed">{text}</p>
  </div>
);

const Main = ({ children }) => <Body>{children}</Body>;

export default {
  Main,
  Block
};
