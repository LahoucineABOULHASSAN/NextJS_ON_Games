import parse from "html-react-parser";
const AboutDetails = ({ show }) => {
  const { name, status, summary } = show;
  return (
    <>
      <h1 className="text-2xl text-green-500 font-semibold mb-4">About</h1>
      <div className="rounded-lg text-sm text-gray-400 bg-gray-700 p-4">
        <h3 className="text-lg text-gray-300 font-bold uppercase">{name}</h3>
        <h4 className="mb-4">{status}</h4>
        <p className="text-justify leading-6">{parse(summary)}</p>
      </div>
    </>
  );
};

export default AboutDetails;
