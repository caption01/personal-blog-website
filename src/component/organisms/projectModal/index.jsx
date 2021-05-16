import { map } from 'lodash';

import { Modal } from '@/atoms/index';
import useUnderline from '@/utility/styles/useUnderline';

const Tool = ({ name }) => (
  <span className="border-solid border border-indigo-600 hover:bg-indigo-100 text-lg p-1">
    {name}
  </span>
);

const TextLink = ({ link, children }) => (
  <a className="text-2xl" target="blank" href={link}>
    {children}
  </a>
);

const LinkUnderLink = useUnderline(TextLink);

const ProjectModal = ({ data, onClick }) => (
  <div>
    <Modal.Card onClick={onClick}>
      <Modal.Header>
        <h3 className="text-3xl font-semibold">{data?.name}</h3>
      </Modal.Header>
      <Modal.Body>
        <div className="relative px-6 pt-6 flex-auto">
          {map(data?.description, (desc, idx) => (
            <p
              key={idx}
              className="my-4 text-blueGray-500 text-xl leading-relaxed"
            >
              {desc}
            </p>
          ))}
        </div>
        {data?.link && (
          <div className="relative px-6 flex text-indigo-600">
            <LinkUnderLink line={false} link={data?.link}>
              Link
            </LinkUnderLink>
          </div>
        )}
        <div className="relative px-6 pb-6 flex-auto">
          <p className="my-4 font-semibold text-xl leading-relaxed">Tools</p>
          <div className="flex flex-start flex-wrap gap-4 items-center">
            {map(data?.tools, tool => (
              <Tool key={tool} name={tool} />
            ))}
          </div>
        </div>
      </Modal.Body>
    </Modal.Card>
  </div>
);

export default ProjectModal;
