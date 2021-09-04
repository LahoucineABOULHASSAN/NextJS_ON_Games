const CardImage = ({ image, url, title }) => {
  return (
    <div className="relative image-header">
      <a href={url} target="_blank">
        <img className="w-full h-full rounded-t-lg" src={image} alt={title} />
      </a>
    </div>
  );
};

export default CardImage;
