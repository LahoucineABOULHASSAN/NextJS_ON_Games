const Gameheader = ({ game }) => {
  const pic =
    (game.screenshots.length && game.screenshots[0].image) ||
    "https://via.placeholder.com/900?text=Image+Not+Found";
  return (
    <div className="relative w-full">
      <img src={pic} className="h-auto" />
      <div className="game absolute top-0 left-0 bottom-0 w-full"></div>
      <div className="absolute top-0 left-0 bottom-0 text-gray-300 p-10 w-full">
        <h1 className="mb-3">
          <a
            className="text-4xl leading-8 mb-3 hover:text-gray-400"
            href={game.game_url}
          >
            {game.title}
          </a>
        </h1>
        <h3 className="text-lg font-semibold mb-2">{game.publisher}</h3>
      </div>
    </div>
  );
};

export default Gameheader;
