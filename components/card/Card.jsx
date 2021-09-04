import CardImage from "./CardImage";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardTags from "./CardTags";

const Card = ({ show }) => {
  const { id, name, image, status, genres, rating } = show;

  return (
    <div className="shadow-md rounded-lg  transition duration-700 ease pb-1">
      <CardImage
        name={name}
        image={image.original}
        url={`/series/${id}`}
        rating={rating.average}
      />
      <div className="relative bg-white z-20 p-4">
        <CardHeader name={name} status={status} />
        <CardTags tags={genres} />
        {/* <CardBody /> */}
      </div>
    </div>
  );
};

export default Card;
