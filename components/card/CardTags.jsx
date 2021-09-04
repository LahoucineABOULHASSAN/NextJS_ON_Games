const CardTags = ({ tags }) => {
  return (
    <ul className="z-20 w-full my-2">
      {tags.map((tag, index) => (
        <li
          key={index}
          className="text-sm text-gray-700 capitalize inline-block border rounded-lg border-transparent cursor-default bg-gray-300 hover:bg-gray-200 transition duration-700 ease py-1 px-2 mr-2 mt-2"
        >
          #{tag}
        </li>
      ))}
    </ul>
  );
};

export default CardTags;
