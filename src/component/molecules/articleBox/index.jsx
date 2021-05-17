import { map } from 'lodash';
import { Paragraph } from '@/atoms/index';

const Image = ({ src }) => (
  <div className="flex-initial w-full">
    <div className="relative w-full">
      <img className="object-cover h-48  w-full" src={src} alt="images" />
    </div>
  </div>
);

const Description = ({ contents }) => (
  <div className="flex-1 ">
    <Paragraph.Main>
      {map(contents, (text, idx) => (
        <Paragraph.Block key={idx} text={text} />
      ))}
    </Paragraph.Main>
  </div>
);

const Main = ({ children }) => (
  <div className="flex flex-col items-stretch gap-x-2 gap-y-2">{children}</div>
);

export default {
  Main,
  Image,
  Description
};
