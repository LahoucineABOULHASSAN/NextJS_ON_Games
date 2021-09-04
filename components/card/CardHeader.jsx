const CardHeader = ({ name, status }) => {
  return (
    <div>
      <h1 className="text-md">{name}</h1>
      <h2 className="text-sm text-gray-400">{status}</h2>
    </div>
  );
};

export default CardHeader;
