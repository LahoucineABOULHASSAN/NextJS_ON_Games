import { Modal } from "../../components";

const Details = ({ game }) => {
  const { platform, release_date, genre, status, developer } = game;
  return (
    <div className="flex flex-col justify-between bg-gray-900 text-gray-300 w-full py-8 px-10">
      <div className="rounded-lg bg-gray-800 p-8 my-10">
        <h3 className="inline-block text-sm uppercase border-2 border-gray-300 py-1 px-2 w-auto mb-3">
          {platform}
        </h3>
        <h3 className="text-gray-300 font-semibold">Released {release_date}</h3>
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
      <Modal game={game} />
    </div>
  );
};

export default Details;
