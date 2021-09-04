const CardHeader = ({ title, published, genre }) => {
  return (
    <div>
      <h1 className="text-md">{title}</h1>
      <h2 className="text-sm text-gray-400">{published}</h2>
      <h2 className="text-sm text-gray-400">{genre}</h2>
    </div>
  );
};

export default CardHeader;
