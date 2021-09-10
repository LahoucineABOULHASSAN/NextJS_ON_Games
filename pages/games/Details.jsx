import { Modal } from "../../components";

const Details = ({ game }) => {
  return (
    <div className="flex flex-col justify-between bg-gray-900 text-gray-300 w-full py-12 px-6 md:px-10">
      {game && (
        <div className="flex flex-row flex-wrap items-center justify-between rounded-lg bg-gray-800 p-8 mb-10">
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h1 className="text-md text-center md:text-left text-purple-300 tracking-widest font-semibold capitalize w-auto mb-3">
              Game Infos
            </h1>
            <h3>
              <span className="text-gray-300 font-semibold mr-4">
                Platform:
              </span>{" "}
              <span className="text-sm text-gray-400">{game.platform}</span>
            </h3>
            <h3>
              <span className="text-gray-300 font-semibold mr-4">
                Released:
              </span>{" "}
              <span className="text-sm text-gray-400">{game.release_date}</span>
            </h3>
            <h3>
              <span className="text-gray-300 font-semibold mr-4">Genre:</span>{" "}
              <span className="text-sm text-gray-400">{game.genre}</span>
            </h3>
            <h3>
              <span className="text-gray-300 font-semibold mr-4">Status:</span>{" "}
              <span className="text-sm text-gray-400">{game.status}</span>
            </h3>
            <h3>
              <span className="text-gray-300 font-semibold mr-4">
                Developer:
              </span>{" "}
              <span className="text-sm text-gray-400">{game.developer}</span>
            </h3>
          </div>
          {game.minimum_system_requirements && (
            <div className="w-full md:w-auto">
              <h1 className="text-md text-center md:text-left font-semibold  text-purple-300 tracking-widest  capitalize w-auto mb-3">
                minimum system requirements
              </h1>
              <h3>
                <span className="text-gray-300 font-semibold mr-4">
                  Memory:
                </span>{" "}
                <span className="text-sm text-gray-400">
                  {game.minimum_system_requirements.memory || "unknown"}
                </span>
              </h3>
              <h3>
                <span className="text-gray-300 font-semibold mr-4">
                  Storage:
                </span>{" "}
                <span className="text-sm text-gray-400">
                  {game.minimum_system_requirements.storage || "unknown"}
                </span>
              </h3>
              <h3>
                <span className="text-gray-300 font-semibold mr-4">
                  Processor:
                </span>{" "}
                <span className="text-sm text-gray-400">
                  {game.minimum_system_requirements.processor || "unknown"}
                </span>
              </h3>
              <h3>
                <span className="text-gray-300 font-semibold mr-4">
                  Operation System:
                </span>{" "}
                <span className="text-sm text-gray-400">
                  {game.minimum_system_requirements.os || "unknown"}
                </span>
              </h3>
              <h3>
                <span className="text-gray-300 font-semibold mr-4">
                  Graphics:
                </span>{" "}
                <span className="text-sm text-gray-400">
                  {game.minimum_system_requirements.graphics || "unknown"}
                </span>
              </h3>
            </div>
          )}
        </div>
      )}
      {game && <Modal game={game} />}
    </div>
  );
};

export default Details;
