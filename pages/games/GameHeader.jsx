const Gameheader = ({ game }) => {
  const {
    screenshots,
    title,
    platform,
    genre,
    publisher,
    game_url,
    status,
    developer,
    release_date,
  } = game;
  const pic = screenshots[0].image;
  return (
    <div className="mb-8">
      <div className="relative w-full">
        <img src={pic} className="h-auto" />
        <div className="game absolute top-0 left-0 bottom-0 w-full"></div>
        <div className="flex flex-col justify-between text-gray-300 absolute top-0 left-0 bottom-0 w-2/4 py-8 px-12">
          <div>
            <h1 className="mb-3">
              <a
                className="text-4xl leading-8 mb-3 hover:text-gray-400"
                href={game_url}
              >
                {title}
              </a>
            </h1>
            <h3 className="text-lg font-semibold mb-2">{publisher}</h3>
          </div>
          <div className="rounded-lg bg-gray-800 p-8">
            <h3 className="inline-block text-sm uppercase border-2 border-gray-300 py-1 px-2 w-auto mb-3">
              {platform}
            </h3>
            <h3 className="text-gray-300 font-semibold">
              Released {release_date}
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
              <span className="text-gray-300 font-semibold mr-4">
                Developer:
              </span>{" "}
              <span className="text-sm text-gray-400">{developer}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gameheader;
