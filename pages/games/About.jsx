const About = ({ game }) => {
  return (
    <div className="py-12 px-10">
      {game && (
        <div className="flex flex-row flex-wrap justify-between text-gray-700">
          <div className="md:w-1/4 text-xl leading-10 pb-4">
            <h1 className="text-sm font-semibold uppercase mb-2">
              Game Overview
            </h1>
            <p className="text-lg text-justify">{game.short_description}</p>
          </div>
          <p className="md:w-3/4 text-sm whitespace-pre-line text-justify pb-4 md:px-8">
            {game.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default About;
