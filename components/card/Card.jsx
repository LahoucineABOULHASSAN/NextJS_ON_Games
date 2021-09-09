import CardImage from "./CardImage";
import CardHeader from "./CardHeader";

const Card = ({ game }) => {
  const { id, title, thumbnail, release_date, genre } = game;

  return (
    <div className="shadow-md rounded-lg  transition duration-700 ease pb-1">
      {game && (
        <>
          <CardImage
            title={title}
            image={
              (image && thumbnail) ||
              "https://via.placeholder.com/900?text=Image+Not+Found"
            }
            url={`/games/${id}`}
          />
          <div className="relative bg-white z-20 p-4">
            <CardHeader title={title} published={release_date} genre={genre} />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
