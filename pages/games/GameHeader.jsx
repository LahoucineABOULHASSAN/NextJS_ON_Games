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
    <div className="relative w-full">
      <img src={pic} className="h-auto" />
      <div className="game absolute top-0 left-0 bottom-0 w-full"></div>
      <div className="absolute top-0 left-0 bottom-0 text-gray-300 p-10 w-full">
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
    </div>
  );
};

export default Gameheader;
