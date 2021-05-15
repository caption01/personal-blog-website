import { map } from 'lodash';

import { Modal } from '@/atoms/index';

const Tool = ({ name }) => (
  <span className="border-solid border border-indigo-600 hover:bg-gray-100 m-4 p-2">
    {name}
  </span>
);

const ProjectModal = ({ data, onClick }) => (
  <div>
    <Modal.Card onClick={onClick}>
      <Modal.Header>
        <h3 className="text-3xl font-semibold">{data?.name}</h3>
      </Modal.Header>
      <Modal.Body>
        <div className="relative px-6 pt-6 flex-auto">
          <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
            {data?.description}
          </p>
        </div>
        <div className="relative px-6 pb-6 flex-auto">
          <p className="my-4 font-semibold text-lg leading-relaxed">Tools</p>
          {map(data?.tools, tool => (
            <Tool key={tool} name={tool} />
          ))}
        </div>
      </Modal.Body>
    </Modal.Card>
  </div>
);

export default ProjectModal;
