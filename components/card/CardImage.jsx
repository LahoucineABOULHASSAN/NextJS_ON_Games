import Star from "../Star";

const CardImage = ({ image, url, name, rating }) => {
  return (
    <div className="relative image-header">
      <a href={url} target="_blank">
        <img className="w-full h-full rounded-t-lg" src={image} alt={name} />
      </a>
      <Star rating={rating} />
    </div>
  );
};

export default CardImage;
