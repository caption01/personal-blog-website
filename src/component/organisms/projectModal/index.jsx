import { map } from 'lodash';

const Tool = ({ name }) => (
  <span className="border-solid border border-indigo-600 hover:bg-gray-100 m-4 p-2">
    {name}
  </span>
);

const ProjectModal = ({ data, onClick }) => (
  <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/* content */}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/* header */}
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">{data?.name}</h3>
          </div>
          {/* body */}
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
          {/* footer */}
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => onClick(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black" />
  </>
);

export default ProjectModal;
