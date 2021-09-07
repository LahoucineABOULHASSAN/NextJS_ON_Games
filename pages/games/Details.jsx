import { Modal } from "../../components";

const Details = ({ game }) => {
  const { platform, release_date, genre, status, developer } = game;
  const { os, processor, memory, graphics, storage } =
    game.minimum_system_requirements;
  return (
    <div className="flex flex-col justify-between bg-gray-900 text-gray-300 w-full py-12 px-10">
      <div className="flex flex-row flex-wrap items-center justify-between rounded-lg bg-gray-800 p-8 mb-10">
        <div>
          <h1 className="text-md text-purple-300 tracking-widest font-semibold capitalize w-auto mb-3">
            Game Infos
          </h1>
          <h3>
            <span className="text-gray-300 font-semibold mr-4">Platform:</span>{" "}
            <span className="text-sm text-gray-400">{platform}</span>
          </h3>
          <h3>
            <span className="text-gray-300 font-semibold mr-4">Released:</span>{" "}
            <span className="text-sm text-gray-400">{release_date}</span>
          </h3>
          <h3>
            <span className="text-gray-300 font-semibold mr-4">Genre:</span>{" "}
            <span className="text-sm text-gray-400">{genre}</span>
          </h3>
          <h3>
            <span className="text-gray-300 font-semibold mr-4">Status:</span>{" "}
            <span className="text-sm text-gray-400">{status}</span>
          </h3>
          <h3>
            <span className="text-gray-300 font-semibold mr-4">Developer:</span>{" "}
            <span className="text-sm text-gray-400">{developer}</span>
          </h3>
        </div>
        <div>
          <h1 className="text-md font-semibold  text-purple-300 tracking-widest  capitalize w-auto mb-3">
            minimum system requirements
          </h1>
          <h3>
            <span className="text-gray-300 font-semibold mr-4">Memory:</span>{" "}
            <span className="text-sm text-gray-400">{memory}</span>
          </h3>
          <h3>
            <span className="text-gray-300 font-semibold mr-4">Storage:</span>{" "}
            <span className="text-sm text-gray-400">{storage}</span>
          </h3>
          <h3>
            <span className="text-gray-300 font-semibold mr-4">Processor:</span>{" "}
            <span className="text-sm text-gray-400">{processor}</span>
          </h3>
          <h3>
            <span className="text-gray-300 font-semibold mr-4">
              Operation System:
            </span>{" "}
            <span className="text-sm text-gray-400">{os}</span>
          </h3>
          <h3>
            <span className="text-gray-300 font-semibold mr-4">Graphics:</span>{" "}
            <span className="text-sm text-gray-400">{graphics}</span>
          </h3>
        </div>
      </div>
      <Modal game={game} />
    </div>
  );
};

export default Details;
