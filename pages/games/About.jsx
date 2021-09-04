import AboutDetails from "./AboutDetails";
import AboutMoreDetails from "./AboutMoreDetails";

const About = ({ show }) => {
  return (
    <div className="w-full p-10 bg-gray-900">
      <AboutDetails show={show} />
      <AboutMoreDetails show={show} />
    </div>
  );
};

export default About;
