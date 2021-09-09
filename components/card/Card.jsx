import CardImage from "./CardImage";
import CardHeader from "./CardHeader";

const Card = ({ game }) => {
  return (
    <div className="shadow-md rounded-lg  transition duration-700 ease pb-1">
      {game && (
        <>
          <CardImage
            title={game.title}
            image={
              (game && game.thumbnail) ||
              "https://via.placeholder.com/900?text=Image+Not+Found"
            }
            url={`/games/${game.id}`}
          />
          <div className="relative bg-white z-20 p-4">
            <CardHeader
              title={game.title}
              published={game.release_date}
              genre={game.genre}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
